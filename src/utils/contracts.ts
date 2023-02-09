import { contracts } from '../../addresses';
import { ZERO_ADDR } from '../utils/constants';
import { Address } from '@graphprotocol/graph-ts';

const vaultDai_1_0_Address = Address.fromString(contracts.AVAXDAIVault_v1_0_Address);
const vaultUsdc_1_0_Address = Address.fromString(contracts.AVAXUSDCVault_v1_0_Address);
const vaultUsdt_1_0_Address = Address.fromString(contracts.AVAXUSDTVault_v1_0_Address);
const vaultDai_1_5_Address = Address.fromString(contracts.AVAXDAIVault_v1_5_Address);
const vaultUsdc_1_5_Address = Address.fromString(contracts.AVAXUSDCVault_v1_5_Address);
const vaultUsdt_1_5_Address = Address.fromString(contracts.AVAXUSDTVault_v1_5_Address);
const vaultDai_1_6_Address = Address.fromString(contracts.AVAXDAIVault_v1_6_Address);
const vaultUsdc_1_6_Address = Address.fromString(contracts.AVAXUSDCVault_v1_6_Address);
const vaultUsdt_1_6_Address = Address.fromString(contracts.AVAXUSDTVault_v1_6_Address);
const vaultDai_1_7_Address = Address.fromString(contracts.AVAXDAIVault_v1_7_Address);
const vaultUsdc_1_7_Address = Address.fromString(contracts.AVAXUSDCVault_v1_7_Address);
const vaultUsdt_1_7_Address = Address.fromString(contracts.AVAXUSDTVault_v1_7_Address);


export const isDepositOrWithdrawal = (
    from: Address,
    to: Address,
    contract: Address
): bool => {
    if (
        (from == ZERO_ADDR || to == ZERO_ADDR)
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
