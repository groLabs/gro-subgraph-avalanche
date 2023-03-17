// SPDX-License-Identifier: AGPLv3

//  ________  ________  ________
//  |\   ____\|\   __  \|\   __  \
//  \ \  \___|\ \  \|\  \ \  \|\  \
//   \ \  \  __\ \   _  _\ \  \\\  \
//    \ \  \|\  \ \  \\  \\ \  \\\  \
//     \ \_______\ \__\\ _\\ \_______\
//      \|_______|\|__|\|__|\|_______|

// gro protocol - avalanche subgraph: https://github.com/groLabs/gro-subgraph-avalanche

/// @notice Initialises entities <MasterData>
/// @dev There is one single MasterData record with 0x address that get updated

import { MasterData } from '../../generated/schema';
import { initAllStrategies } from '../setters/strats';
import {
    ADDR,
    LAUNCH_TIMESTAMP_AVAX,
} from '../utils/constants';


/// @notice Initialises entity <MasterData> with default values if not created yet
/// @return MasterData object
export const initMD = (): MasterData => {
    let md = MasterData.load(ADDR.ZERO);
    if (!md) {
        md = new MasterData(ADDR.ZERO);
        md.status = 'ok';
        md.network_id = i32(43114);
        md.network_name = 'avalanche';
        md.launch_timestamp = i32(LAUNCH_TIMESTAMP_AVAX);
    }
    return md;
}

/// @notice Initialises entities <MasterData> & <Strategy> if <MasterData> didn't exist yet
/// @dev This function is only called once from the following events:
///     - <OwnershipTransferred> from Vault v1.0 (1st block of Avax deployment) -> prod data
///     - <OwnershipTransferred> from Vault v1.7 (1st block of latest Vault version) -> test data
export const initMasterDataOnce = (): void => {
    let md = MasterData.load(ADDR.ZERO);
    if (!md) {
        md = initMD();
        md.save();
        initAllStrategies();
    }
}
