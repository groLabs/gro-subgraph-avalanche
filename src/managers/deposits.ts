// SPDX-License-Identifier: AGPLv3

//  ________  ________  ________
//  |\   ____\|\   __  \|\   __  \
//  \ \  \___|\ \  \|\  \ \  \|\  \
//   \ \  \  __\ \   _  _\ \  \\\  \
//    \ \  \|\  \ \  \\  \\ \  \\\  \
//     \ \_______\ \__\\ _\\ \_______\
//      \|_______|\|__|\|__|\|_______|

// gro protocol - avalanche subgraph: https://github.com/groLabs/gro-subgraph-avalanche

/// @notice Manages deposit events from Vault contracts by:
///     - Storing the user (if not existing yet)
///     - Storing the core deposit transaction
///     - Updating the user's balance
/// @dev Vault versions: 1.0, 1.5, 1.6 & 1.7

import { setUser } from '../setters/users'
import { setTotals } from '../setters/totals';
import { DepoWithdraw } from '../types/depowithdraw';
import { TX_TYPE as TxType } from '../utils/constants';
import { setDepoWithdrawTx } from '../setters/depowithdraw';


/// @notice Manages core deposits from Vaults
/// @param ev the parsed deposit event
/// @param token the G-token
export const manageDeposit = (
    ev: DepoWithdraw,
    token: string,
): void => {
    // Creates user if not existing yet in entity <User>
    setUser(ev.userAddress);

    // Stores deposit tx in entity <TransferTx>
    const tx = setDepoWithdrawTx(ev, token);

    // Updates user totals in entity <Totals>
    setTotals(
        TxType.CORE_DEPOSIT,
        token,
        tx.user_address,
        tx.coin_amount,
        tx.usd_amount,
    );
}