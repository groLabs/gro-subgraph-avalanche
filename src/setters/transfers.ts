import { DECIMALS } from '../utils/constants';
import { Bytes } from '@graphprotocol/graph-ts';
import { TransferEvent } from '../types/transfer';
import { TransferTx } from '../../generated/schema';
import {
    tokenToDecimal,
    getPricePerShare,
} from '../utils/tokens';


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
    tx.contract_address = ev.contractAddress;
    tx.block_number = ev.block.toI32();
    tx.block_timestamp = ev.timestamp.toI32();
    tx.token = token;
    tx.type = type;
    tx.hash = Bytes.fromHexString(ev.id.split('-')[0]);
    tx.user_address = userAddress;
    tx.from_address = ev.fromAddress;
    tx.to_address = ev.toAddress;
    tx.coin_amount = coinAmount.truncate(DECIMALS);
    tx.usd_amount = coinAmount.times(pricePerShare[2]).truncate(DECIMALS);
    tx.current_price_per_share = pricePerShare[0].truncate(DECIMALS);
    tx.estimated_price_per_share = pricePerShare[1].truncate(DECIMALS);
    tx.save();
    return tx;
}
