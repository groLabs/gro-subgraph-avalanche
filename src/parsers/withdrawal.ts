// @ts-nocheck
import { ADDR } from '../utils/constants';
import { DepoWithdraw } from '../types/depowithdraw';


export function parseWithdrawalEvent<T>(ev: T): DepoWithdraw {
    const logIndex = ev.logIndex.toI32();
    const event = new DepoWithdraw(
        ev.transaction.hash.concatI32(logIndex),
        ev.block.number.toI32(),
        ev.block.timestamp.toI32(),
        ev.transaction.hash,
        ev.address,
        'core_withdrawal',
        ev.params.from,                 // links with User.id,
        ev.params.from,                 // from
        ADDR.ZERO,                      // to
        ev.params.shares,               // coinAmount
        ev.params.value,                // usdAmount
    )
    return event;
}
