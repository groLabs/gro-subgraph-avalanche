import { contracts } from '../../addresses';
import { ADDR } from '../utils/constants';
import { Address } from '@graphprotocol/graph-ts';


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

// Contract addresses
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
