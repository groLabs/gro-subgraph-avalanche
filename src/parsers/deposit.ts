// @ts-nocheck
import { ADDR } from '../utils/constants';
import { DepoWithdraw } from '../types/depowithdraw';
import { TX_TYPE as TxType } from '../utils/constants';


export function parseDepositEvent<T>(ev: T): DepoWithdraw {
    const logIndex = ev.logIndex.toI32();
    const event = new DepoWithdraw(
        ev.transaction.hash.concatI32(logIndex),
        ev.block.number.toI32(),
        ev.block.timestamp.toI32(),
        ev.transaction.hash,
        ev.address,
        TxType.CORE_DEPOSIT,
        ev.params.from,     // FK to User.id,
        ADDR.ZERO,          // from
        ev.params.from,     // to
        ev.params.shares,   // coinAmount
        ev.params._amount,  // usdAmount
    )
    return event;
}
