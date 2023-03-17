// SPDX-License-Identifier: AGPLv3

//  ________  ________  ________
//  |\   ____\|\   __  \|\   __  \
//  \ \  \___|\ \  \|\  \ \  \|\  \
//   \ \  \  __\ \   _  _\ \  \\\  \
//    \ \  \|\  \ \  \\  \\ \  \\\  \
//     \ \_______\ \__\\ _\\ \_______\
//      \|_______|\|__|\|__|\|_______|

// gro protocol - avalanche subgraph: https://github.com/groLabs/gro-subgraph-avalanche

/// @notice Initialises entity <User>

import { Bytes } from '@graphprotocol/graph-ts';
import { User } from '../../generated/schema';


/// @notice Initialises entity <User> with default values if not created yet
/// @dev This function is called every time there is a Gro interaction, as it is not
///		 possible to determine which users are already created in the subgraph
/// @param userAddress the user address
/// @return user object created or loaded for a given user address
export const setUser = (userAddress: Bytes): User => {
    let user = User.load(userAddress);
    if (!user) {
        user = new User(userAddress);
        user.save();
    }
    return user;
}
