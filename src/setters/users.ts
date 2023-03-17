// SPDX-License-Identifier: AGPLv3

//  ________  ________  ________
//  |\   ____\|\   __  \|\   __  \
//  \ \  \___|\ \  \|\  \ \  \|\  \
//   \ \  \  __\ \   _  _\ \  \\\  \
//    \ \  \|\  \ \  \\  \\ \  \\\  \
//     \ \_______\ \__\\ _\\ \_______\
//      \|_______|\|__|\|__|\|_______|

// gro protocol - avalanche subgraph: https://github.com/groLabs/gro-subgraph-avalanche

/// @notice xxx

import { Bytes } from '@graphprotocol/graph-ts';
import { User } from '../../generated/schema';


export const setUser = (userAddress: Bytes): User => {
    let user = User.load(userAddress);
    if (!user) {
        user = new User(userAddress);
        user.save();
    }
    return user;
}
