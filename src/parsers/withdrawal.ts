// @ts-nocheck
import { ADDR } from '../utils/constants';
import { DepoWithdraw } from '../types/depowithdraw';
import { TX_TYPE as TxType } from '../utils/constants';


export function parseWithdrawalEvent<T>(ev: T): DepoWithdraw {
    const logIndex = ev.logIndex.toI32();
    const event = new DepoWithdraw(
        ev.transaction.hash.concatI32(logIndex),
        ev.block.number.toI32(),
        ev.block.timestamp.toI32(),
        ev.transaction.hash,
        ev.address,
        TxType.CORE_WITHDRAWAL,
        ev.params.from,     // FK to User.id,
        ev.params.from,     // from
        ADDR.ZERO,          // to
        ev.params.shares,   // coinAmount
        ev.params.value,    // usdAmount
    )
    return event;
}
