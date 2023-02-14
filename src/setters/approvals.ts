import { NUM } from '../utils/constants';
import { Bytes } from '@graphprotocol/graph-ts';
import { ApprovalTx } from '../../generated/schema';
import { tokenToDecimal } from '../utils/tokens';
import { ApprovalEvent } from '../types/approval';


export const setApprovalTx = (
    ev: ApprovalEvent,
    token: string,
): ApprovalTx => {
    let tx = new ApprovalTx(ev.id);
    const coinAmount = tokenToDecimal(ev.value, 18, 7);
    // const pricePerShare = getPricePerShare(token);
    tx.ownerAddress = ev.ownerAddress;
    tx.contractAddress = ev.contractAddress;
    tx.block = ev.block.toI32();
    tx.timestamp = ev.timestamp.toI32();
    tx.token = token;
    tx.type = 'approval';
    tx.hash = Bytes.fromHexString(ev.id.split('-')[0]);
    tx.coinAmount = coinAmount;
    tx.usdAmount = coinAmount.times(NUM.ONE); // TBD
    tx.spenderAddress = ev.spenderAddress;
    tx.save();
    return tx;
}

