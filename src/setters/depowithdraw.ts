import { Bytes } from '@graphprotocol/graph-ts';
import { TransferTx } from '../../generated/schema';
import { tokenToDecimal } from '../utils/tokens';
import { DepoWithdraw } from '../types/depowithdraw';
import {
    ZERO,
    DECIMALS
} from '../utils/constants';


export const setDepoWithdrawTx = (
    ev: DepoWithdraw,
    token: string,
): TransferTx => {
    let tx = new TransferTx(ev.id);

    const base = token.includes('DAI')
        ? 18
        : 6;
    const coinAmount = tokenToDecimal(ev.coinAmount, base, DECIMALS);
    const usdAmount = tokenToDecimal(ev.usdAmount, base, DECIMALS);

    tx.contractAddress = ev.contractAddress;
    tx.block = ev.block;
    tx.timestamp = ev.timestamp;
    tx.token = token;
    tx.type = ev.type;
    tx.hash = Bytes.fromHexString(ev.id.split('-')[0]);
    tx.userAddress = ev.userAddress;
    tx.fromAddress = ev.fromAddress;
    tx.toAddress = ev.toAddress;
    tx.coinAmount = coinAmount;
    tx.usdAmount = usdAmount;
    tx.currentPricePerShare = ZERO; //TODO: TBC -> pricePerShare[0].truncate(DECIMALS);
    tx.estimatedPricePerShare = ZERO; //TODO: TBC ->  pricePerShare[1].truncate(DECIMALS);

    tx.save();
    return tx;
}