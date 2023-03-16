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
///     - Parses transfer events from Vault contract versions 1.0, 1.5, 1.6 & 1.7
///     - @ts-nocheck is enabled to handle different contract versions with same params

// @ts-nocheck

import { TransferEvent } from '../types/transfer';


/// @notice Parses <Transfer> events from Vault contracts
/// @param ev the transfer event
/// @return parsed transfer in <TransferEvent> class instance
export function parseTransferEvent<T>(ev: T): TransferEvent {
    const logIndex = ev.logIndex.toI32();
    const event = new TransferEvent(
        ev.transaction.hash.concatI32(logIndex),
        ev.block.number,
        ev.block.timestamp,
        ev.transaction.hash,
        ev.address,
        ev.params.from,
        ev.params.to,
        ev.params.value,
    )
    return event;
}
