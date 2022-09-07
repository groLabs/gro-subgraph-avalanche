import { Bytes } from '@graphprotocol/graph-ts';
import { TransferTx } from '../../generated/schema';
import {
    tokenToDecimal,
    getPricePerShare,
} from '../utils/tokens';
import { TransferEvent } from '../types/transfer';
import { DECIMALS } from '../utils/constants';
// import { ONE, ZERO } from '../utils/constants';


export const setTransferTx = (
    ev: TransferEvent,
    userAddress: string,
    type: string,
    token: string,
): TransferTx => {
    const transfer_tag = (type == 'transfer_in')
        ? '-in'
        : (type == 'transfer_out')
            ? '-out'
            : '';
    let tx = new TransferTx(
        ev.id + transfer_tag
    );

    const base = token.includes('DAI')
        ? 18
        : 6;
    const coinAmount = tokenToDecimal(ev.value, base, 0);
    const pricePerShare = getPricePerShare(token);

    tx.contractAddress = ev.contractAddress;
    tx.block = ev.block.toI32();
    tx.timestamp = ev.timestamp.toI32();
    tx.token = token;
    tx.type = type;
    tx.hash = Bytes.fromHexString(ev.id.split('-')[0]);
    tx.userAddress = userAddress;
    tx.fromAddress = ev.fromAddress;
    tx.toAddress = ev.toAddress;
    tx.coinAmount = coinAmount.truncate(DECIMALS);
    tx.usdAmount = coinAmount.times(pricePerShare).truncate(DECIMALS);


    tx.save();
    return tx;
}
