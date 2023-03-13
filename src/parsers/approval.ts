// @ts-nocheck
import { ApprovalEvent } from '../types/approval';


export function parseApprovalEvent<T>(ev: T): ApprovalEvent {
    const logIndex = ev.logIndex.toI32();
    const event = new ApprovalEvent(
        ev.transaction.hash.concatI32(logIndex),
        ev.block.number,
        ev.block.timestamp,
        ev.transaction.hash,
        ev.address,
        ev.params.owner, // FK to User.id
        ev.params.spender,
        ev.params.value,
    )
    return event;
}
