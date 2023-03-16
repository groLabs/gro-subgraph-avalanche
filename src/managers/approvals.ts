// SPDX-License-Identifier: AGPLv3

//  ________  ________  ________
//  |\   ____\|\   __  \|\   __  \
//  \ \  \___|\ \  \|\  \ \  \|\  \
//   \ \  \  __\ \   _  _\ \  \\\  \
//    \ \  \|\  \ \  \\  \\ \  \\\  \
//     \ \_______\ \__\\ _\\ \_______\
//      \|_______|\|__|\|__|\|_______|

// gro protocol - avalanche subgraph: https://github.com/groLabs/gro-subgraph-avalanche

/// @notice Manages approval events by:
///     - Storing the user (if not existing yet)
///     - Storing the approval transaction
/// @dev Vault versions: 1.0, 1.5, 1.6 & 1.7

import { setUser } from '../setters/users'
import { ApprovalEvent } from '../types/approval';
import { setApprovalTx } from '../setters/approvals';


/// @notice Manages approval events 
/// @param ev the parsed approval event
/// @param token the approval G-token
export const manageApproval = (
    ev: ApprovalEvent,
    token: string
): void => {
    // Creates user if not existing yet in entity <User>
    setUser(ev.ownerAddress);

    // Stores approval tx in entity <ApprovalTx>
    setApprovalTx(ev, token);
}
