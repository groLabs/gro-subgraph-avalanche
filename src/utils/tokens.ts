import { contracts } from '../../addresses';
import { VaultAdaptorMK2_v1_0 as dai_v1_0 } from '../../generated/avaxdaivault_v1_0/VaultAdaptorMK2_v1_0';
import { VaultAdaptorMK2_v1_0 as usdc_v1_0 } from '../../generated/avaxusdcvault_v1_0/VaultAdaptorMK2_v1_0';
import { VaultAdaptorMK2_v1_0 as usdt_v1_0 } from '../../generated/avaxusdtvault_v1_0/VaultAdaptorMK2_v1_0';
import { VaultAdaptorMK2_v1_5 as dai_v1_5 } from '../../generated/avaxdaivault_v1_5/VaultAdaptorMK2_v1_5';
import { VaultAdaptorMK2_v1_5 as usdc_v1_5 } from '../../generated/avaxusdcvault_v1_5/VaultAdaptorMK2_v1_5';
import { VaultAdaptorMK2_v1_5 as usdt_v1_5 } from '../../generated/avaxusdtvault_v1_5/VaultAdaptorMK2_v1_5';
import { VaultAdaptorMK2_v1_6 as dai_v1_6 } from '../../generated/avaxdaivault_v1_6/VaultAdaptorMK2_v1_6';
import { VaultAdaptorMK2_v1_6 as usdc_v1_6 } from '../../generated/avaxusdcvault_v1_6/VaultAdaptorMK2_v1_6';
import { VaultAdaptorMK2_v1_6 as usdt_v1_6 } from '../../generated/avaxusdtvault_v1_6/VaultAdaptorMK2_v1_6';
import { VaultAdaptorMK2_v1_7 as dai_v1_7 } from '../../generated/avaxdaivault_v1_7/VaultAdaptorMK2_v1_7';
import { VaultAdaptorMK2_v1_7 as usdc_v1_7 } from '../../generated/avaxusdcvault_v1_7/VaultAdaptorMK2_v1_7';
import { VaultAdaptorMK2_v1_7 as usdt_v1_7 } from '../../generated/avaxusdtvault_v1_7/VaultAdaptorMK2_v1_7';
import {
    log,
    Address,
    BigInt,
    BigDecimal,
} from '@graphprotocol/graph-ts';
import {
    ZERO,
} from '../utils/constants';
const ZERO_RESULT = [ZERO, ZERO, ZERO];

// TODO : in one single file, and then export it!!!
// Contracts
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

// Converts a BigInt into a (N-decimal) BigDecimal
function tokenToDecimal(
    amount: BigInt,
    precision: i32,
    decimals: i32,
): BigDecimal {
    const scale = BigInt.fromI32(10)
        .pow(precision as u8)
        .toBigDecimal();
    if (decimals === 0) {
        return amount.toBigDecimal()
            .div(scale);
    } else {
        return amount.toBigDecimal()
            .div(scale)
            .truncate(decimals);
    }
}

// Retrieves price per share for a given token
const getPricePerShare = (token: string): BigDecimal[] => {
    if (token === 'groDAI_e_vault_v1_0') {
        const contract = dai_v1_0.bind(vaultDai_1_0_Address);
        return callPricePerShare(contract, token);
    } else if (token === 'groUSDC_e_vault_v1_0') {
        const contract = usdc_v1_0.bind(vaultUsdc_1_0_Address);
        return callPricePerShare(contract, token);
    } else if (token === 'groUSDT_e_vault_v1_0') {
        const contract = usdt_v1_0.bind(vaultUsdt_1_0_Address);
        return callPricePerShare(contract, token);
    } else if (token === 'groDAI_e_vault_v1_5') {
        const contract = dai_v1_5.bind(vaultDai_1_5_Address);
        return callPricePerShare(contract, token);
    } else if (token === 'groUSDC_e_vault_v1_5') {
        const contract = usdc_v1_5.bind(vaultUsdc_1_5_Address);
        return callPricePerShare(contract, token);
    } else if (token === 'groUSDT_e_vault_v1_5') {
        const contract = usdt_v1_5.bind(vaultUsdt_1_5_Address);
        return callPricePerShare(contract, token);
    } else if (token === 'groDAI_e_vault_v1_6') {
        const contract = dai_v1_6.bind(vaultDai_1_6_Address);
        return callPricePerShare(contract, token);
    } else if (token === 'groUSDC_e_vault_v1_6') {
        const contract = usdc_v1_6.bind(vaultUsdc_1_6_Address);
        return callPricePerShare(contract, token);
    } else if (token === 'groUSDT_e_vault_v1_6') {
        const contract = usdt_v1_6.bind(vaultUsdt_1_6_Address);
        return callPricePerShare(contract, token);
    } else if (token === 'groDAI_e_vault_v1_7') {
        const contract = dai_v1_7.bind(vaultDai_1_7_Address);
        return callPricePerShare(contract, token);
    } else if (token === 'groUSDC_e_vault_v1_7') {
        const contract = usdc_v1_7.bind(vaultUsdc_1_7_Address);
        return callPricePerShare(contract, token);
    } else if (token === 'groUSDT_e_vault_v1_7') {
        const contract = usdt_v1_7.bind(vaultUsdt_1_7_Address);
        return callPricePerShare(contract, token);
    } else {
        log.error(
            'src/utils/tokens.ts->getPricePerShare(): gro token {} not found',
            [token]
        );
        return ZERO_RESULT;
    }
}

function callPricePerShare<T>(contract: T, token: string): BigDecimal[] {
    if (contract) {
        //@ts-ignore
        const getPricePerShare = contract.try_getPricePerShare();
        //@ts-ignore
        const getTotalEstimatedAssets = contract.try_totalEstimatedAssets();
        //@ts-ignore
        const getTotalSupply = contract.try_totalSupply();
        if (getPricePerShare.reverted) {
            log.error('src/utils/tokens.ts->callPricePerShare(): call reverted on getPricePerShare()', []);
            return ZERO_RESULT;
        } else if (getTotalEstimatedAssets.reverted) {
            log.error('src/utils/tokens.ts->callPricePerShare(): call reverted on totalEstimatedAssets()', []);
            return ZERO_RESULT;
        } else if (getTotalSupply.reverted) {
            log.error('src/utils/tokens.ts->callPricePerShare(): call reverted on totalSupply()', []);
            return ZERO_RESULT;
        } else {
            const base = token.includes('DAI')
                ? 18
                : 6;
            const totalEstimatedAssets = tokenToDecimal(getTotalEstimatedAssets.value, base, 0);
            const totalSupply = tokenToDecimal(getTotalSupply.value, base, 0);
            const estimatedPricePerShare = (totalSupply.notEqual(ZERO))
                ? totalEstimatedAssets.div(totalSupply)
                : ZERO;
            const currentPricePerShare = tokenToDecimal(getPricePerShare.value, base, 0);
            const finalPricePerShare = (currentPricePerShare.gt(estimatedPricePerShare))
                ? estimatedPricePerShare
                : currentPricePerShare;

            return [
                currentPricePerShare,
                estimatedPricePerShare,
                finalPricePerShare
            ];
        }
    } else {
        log.error('src/utils/tokens.ts->callPricePerShare(): no contract found', []);
        return ZERO_RESULT;
    }
}

export {
    getPricePerShare,
    tokenToDecimal,
}
