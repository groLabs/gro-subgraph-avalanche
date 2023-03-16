// SPDX-License-Identifier: AGPLv3

//  ________  ________  ________
//  |\   ____\|\   __  \|\   __  \
//  \ \  \___|\ \  \|\  \ \  \|\  \
//   \ \  \  __\ \   _  _\ \  \\\  \
//    \ \  \|\  \ \  \\  \\ \  \\\  \
//     \ \_______\ \__\\ _\\ \_______\
//      \|_______|\|__|\|__|\|_______|

// gro protocol - avalanche subgraph: https://github.com/groLabs/gro-subgraph-avalanche

/// @notice
///     - Parses withdrawal events from Vault contract versions 1.0, 1.5, 1.6 & 1.7
///     - @ts-nocheck is enabled to handle different contract versions with same params

// @ts-nocheck

import { ADDR } from '../utils/constants';
import { DepoWithdraw } from '../types/depowithdraw';
import { TX_TYPE as TxType } from '../utils/constants';


/// @notice Parses <LogWithdrawal> events from Vault contracts
/// @dev ev.params.from is foreign key to User.id
/// @param ev the withdrawal event
/// @return parsed withdrawal in <DepoWithdraw> class instance
export function parseWithdrawalEvent<T>(ev: T): DepoWithdraw {
    const logIndex = ev.logIndex.toI32();
    const event = new DepoWithdraw(
        ev.transaction.hash.concatI32(logIndex),
        ev.block.number.toI32(),
        ev.block.timestamp.toI32(),
        ev.transaction.hash,
        ev.address,
        TxType.CORE_WITHDRAWAL,
        ev.params.from,
        ev.params.from,     // from
        ADDR.ZERO,          // to
        ev.params.shares,   // coinAmount
        ev.params.value,    // usdAmount
    )
    return event;
}
