import { ADDR } from '../utils/constants';
import { setUser } from '../setters/users';
import { setTotals } from '../setters/totals';
import { Bytes } from '@graphprotocol/graph-ts';
import { TransferEvent } from '../types/transfer';
import { setTransferTx } from '../setters/transfers';
import { TX_TYPE as TxType } from '../utils/constants';


function buildTransfer(
    ev: TransferEvent,
    userAddress: Bytes,
    type: string,
    token: string,
): void {
    // Creates user if not existing yet in entity <User>
    setUser(userAddress);

    // Stores transfer tx in entity <TransferTx>
    const tx = setTransferTx(
        ev,
        userAddress,
        type,
        token,
    );

    // Updates user totals in entity <Totals>
    setTotals(
        type,
        token,
        userAddress,
        tx.coin_amount,
        tx.usd_amount,
    );
}

export const manageTransfer = (
    ev: TransferEvent,
    token: string
): void => {
    let type: string = '';
    let userAddressIn = ADDR.ZERO;
    let userAddressOut = ADDR.ZERO;

    // Determine event type (deposit, withdrawal or transfer):
    // case A -> if from == 0x, deposit (mint)
    // case B -> if to == 0x, withdrawal (burn)
    // case C -> else, transfer between users (transfer_in & transfer_out)
    if (ev.fromAddress == ADDR.ZERO) {
        userAddressIn = ev.toAddress;
        type = TxType.CORE_DEPOSIT;
    } else if (ev.toAddress == ADDR.ZERO) {
        userAddressOut = ev.fromAddress;
        type = TxType.CORE_WITHDRAWAL;
    } else {
        userAddressIn = ev.toAddress;
        userAddressOut = ev.fromAddress;
    }

    // Create one tx (mint OR burn) or two txs (transfer_in AND transfer_out)
    if (type !== '') {
        let userAddress = (type == TxType.CORE_DEPOSIT)
            ? userAddressIn
            : userAddressOut;
        buildTransfer(ev, userAddress, type, token);
    } else {
        buildTransfer(ev, userAddressIn, TxType.TRANSFER_IN, token);
        buildTransfer(ev, userAddressOut, TxType.TRANSFER_OUT, token);
    }
}
