// @ts-nocheck
import { DepoWithdraw } from '../types/depowithdraw';
import { ZERO_ADDR } from '../utils/constants';


function parseWithdrawalEvent<T>(ev: T): DepoWithdraw {
    const event = new DepoWithdraw(
        ev.transaction.hash.toHex() + "-" + ev.logIndex.toString(),
        ev.block.number.toI32(),
        ev.block.timestamp.toI32(),
        ev.address,
        'core_withdrawal',
        ev.params.from.toHexString(),   // links with User.id,
        ev.params.from,                 // from
        ZERO_ADDR,                      // to
        ev.params.shares,               // coinAmount
        ev.params.value,                // usdAmount
    )
    return event;
}

export {
    parseWithdrawalEvent
}
