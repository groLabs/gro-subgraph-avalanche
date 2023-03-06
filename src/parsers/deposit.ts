// @ts-nocheck
import { ADDR } from '../utils/constants';
import { DepoWithdraw } from '../types/depowithdraw';


export function parseDepositEvent<T>(ev: T): DepoWithdraw {
    const logIndex = ev.logIndex.toI32();
    const event = new DepoWithdraw(
        ev.transaction.hash.concatI32(logIndex),
        ev.block.number.toI32(),
        ev.block.timestamp.toI32(),
        ev.transaction.hash,
        ev.address,
        'core_deposit',
        ev.params.from,                 // links with User.id,
        ADDR.ZERO,                      // from
        ev.params.from,                 // to
        ev.params.shares,               // coinAmount
        ev.params._amount,              // usdAmount
    )
    return event;
}
