// @ts-nocheck
import { DepoWithdraw } from '../types/depowithdraw';
import { ZERO_ADDR } from '../utils/constants';


function parseDepositEvent<T>(ev: T): DepoWithdraw {
    const event = new DepoWithdraw(
        ev.transaction.hash.toHex() + "-" + ev.logIndex.toString(),
        ev.block.number.toI32(),
        ev.block.timestamp.toI32(),
        ev.address,
        'deposit',
        ev.params.from.toHexString(),   // links with User.id,
        ZERO_ADDR,                      // from
        ev.params.from,                 // to
        ev.params.shares,               // coinAmount
        ev.params._amount,              // usdAmount
    )
    return event;
}

export {
    parseDepositEvent
}
