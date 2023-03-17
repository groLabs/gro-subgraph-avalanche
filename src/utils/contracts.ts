// SPDX-License-Identifier: AGPLv3

//  ________  ________  ________
//  |\   ____\|\   __  \|\   __  \
//  \ \  \___|\ \  \|\  \ \  \|\  \
//   \ \  \  __\ \   _  _\ \  \\\  \
//    \ \  \|\  \ \  \\  \\ \  \\\  \
//     \ \_______\ \__\\ _\\ \_______\
//      \|_______|\|__|\|__|\|_______|

// gro protocol - avalanche subgraph: https://github.com/groLabs/gro-subgraph-avalanche

/// @notice Contains contract-related util functions and address conversions

import { contracts } from '../../addresses';
import { ADDR } from '../utils/constants';
import { Address } from '@graphprotocol/graph-ts';


/// @notice Checks if Transfer is a deposit or withdrawal based on from/to addresses
/// @param from the from address
/// @param to the to address
/// @return - True if deposit (from = 0x) or withdrawal (to = 0x) from a Vault contract
///         - False otherwise
export const isDepositOrWithdrawal = (
    from: Address,
    to: Address,
    contract: Address
): bool => {
    if (
        (from == ADDR.ZERO || to == ADDR.ZERO)
        && (
            contract == vaultDai_1_0_Address
            || contract == vaultUsdc_1_0_Address
            || contract == vaultUsdt_1_0_Address
            || contract == vaultDai_1_5_Address
            || contract == vaultUsdc_1_5_Address
            || contract == vaultUsdt_1_5_Address
            || contract == vaultDai_1_6_Address
            || contract == vaultUsdc_1_6_Address
            || contract == vaultUsdt_1_6_Address
            || contract == vaultDai_1_7_Address
            || contract == vaultUsdc_1_7_Address
            || contract == vaultUsdt_1_7_Address
        )
    ) {
        return true;
    } else {
        return false;
    }
}

// Contract addresses conversion (from string to Address)
export const vaultDai_1_0_Address = Address.fromString(contracts.AVAXDAIVault_v1_0_Address);
export const vaultUsdc_1_0_Address = Address.fromString(contracts.AVAXUSDCVault_v1_0_Address);
export const vaultUsdt_1_0_Address = Address.fromString(contracts.AVAXUSDTVault_v1_0_Address);
export const vaultDai_1_5_Address = Address.fromString(contracts.AVAXDAIVault_v1_5_Address);
export const vaultUsdc_1_5_Address = Address.fromString(contracts.AVAXUSDCVault_v1_5_Address);
export const vaultUsdt_1_5_Address = Address.fromString(contracts.AVAXUSDTVault_v1_5_Address);
export const vaultDai_1_6_Address = Address.fromString(contracts.AVAXDAIVault_v1_6_Address);
export const vaultUsdc_1_6_Address = Address.fromString(contracts.AVAXUSDCVault_v1_6_Address);
export const vaultUsdt_1_6_Address = Address.fromString(contracts.AVAXUSDTVault_v1_6_Address);
export const vaultDai_1_7_Address = Address.fromString(contracts.AVAXDAIVault_v1_7_Address);
export const vaultUsdc_1_7_Address = Address.fromString(contracts.AVAXUSDCVault_v1_7_Address);
export const vaultUsdt_1_7_Address = Address.fromString(contracts.AVAXUSDTVault_v1_7_Address);
export const stratDai_1_0_Address = Address.fromString(contracts.AVAXDAIStrategy_v1_0_Address);
export const stratUsdc_1_0_Address = Address.fromString(contracts.AVAXUSDCStrategy_v1_0_Address);
export const stratUsdt_1_0_Address = Address.fromString(contracts.AVAXUSDTStrategy_v1_0_Address);
export const stratDai_1_5_Address = Address.fromString(contracts.AVAXDAIStrategy_v1_5_Address);
export const stratUsdc_1_5_Address = Address.fromString(contracts.AVAXUSDCStrategy_v1_5_Address);
export const stratUsdt_1_5_Address = Address.fromString(contracts.AVAXUSDTStrategy_v1_5_Address);
export const stratDai_1_6_Address = Address.fromString(contracts.AVAXDAIStrategy_v1_6_Address);
export const stratUsdc_1_6_Address = Address.fromString(contracts.AVAXUSDCStrategy_v1_6_Address);
export const stratUsdt_1_6_Address = Address.fromString(contracts.AVAXUSDTStrategy_v1_6_Address);
export const stratDai_1_7_Address = Address.fromString(contracts.AVAXDAIStrategy_v1_7_Address);
export const stratUsdc_1_7_Address = Address.fromString(contracts.AVAXUSDCStrategy_v1_7_Address);
export const stratUsdt_1_7_Address = Address.fromString(contracts.AVAXUSDTStrategy_v1_7_Address);
