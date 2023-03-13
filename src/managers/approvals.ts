import { setUser } from '../setters/users'
import { ApprovalEvent } from '../types/approval';
import { setApprovalTx } from '../setters/approvals';


export const manageApproval = (
    ev: ApprovalEvent,
    token: string
): void => {

    // Creates user if not existing yet in entity <User>
    setUser(ev.ownerAddress);

    // Stores approval tx in entity <ApprovalTx>
    setApprovalTx(ev, token);
}
