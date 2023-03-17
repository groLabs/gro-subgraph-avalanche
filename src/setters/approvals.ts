// SPDX-License-Identifier: AGPLv3

//  ________  ________  ________
//  |\   ____\|\   __  \|\   __  \
//  \ \  \___|\ \  \|\  \ \  \|\  \
//   \ \  \  __\ \   _  _\ \  \\\  \
//    \ \  \|\  \ \  \\  \\ \  \\\  \
//     \ \_______\ \__\\ _\\ \_______\
//      \|_______|\|__|\|__|\|_______|

// gro protocol - avalanche subgraph: https://github.com/groLabs/gro-subgraph-avalanche

/// @notice Stores approvals into entity <ApprovalTx>

import { ApprovalEvent } from '../types/approval';
import { ApprovalTx } from '../../generated/schema';
import {
    DECIMALS,
    TX_TYPE as TxType,
} from '../utils/constants';
import {
    tokenToDecimal,
    getPricePerShare,
} from '../utils/tokens';


/// @notice Stores approvals into entity <ApprovalTx>
/// @dev Triggered by <Approval> events from Vault contract versions 1.0, 1.5, 1.6 & 1.7
/// @param ev the parsed approval event
/// @param token the approval token
/// @return approval object created
export const setApprovalTx = (
    ev: ApprovalEvent,
    token: string,
): ApprovalTx => {
    let tx = new ApprovalTx(ev.id);
    const coinAmount = tokenToDecimal(ev.value, 18, 7);
    const pricePerShare = getPricePerShare(token);
    tx.owner_address = ev.ownerAddress;
    tx.contract_address = ev.contractAddress;
    tx.block_number = ev.block.toI32();
    tx.block_timestamp = ev.timestamp.toI32();
    tx.token = token;
    tx.type = TxType.APPROVAL;
    tx.hash = ev.hash;
    tx.coin_amount = coinAmount;
    tx.usd_amount = coinAmount.times(pricePerShare[2]).truncate(DECIMALS);
    tx.spender_address = ev.spenderAddress;
    tx.save();
    return tx;
}
