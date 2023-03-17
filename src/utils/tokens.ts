// SPDX-License-Identifier: AGPLv3

//  ________  ________  ________
//  |\   ____\|\   __  \|\   __  \
//  \ \  \___|\ \  \|\  \ \  \|\  \
//   \ \  \  __\ \   _  _\ \  \\\  \
//    \ \  \|\  \ \  \\  \\ \  \\\  \
//     \ \_______\ \__\\ _\\ \_______\
//      \|_______|\|__|\|__|\|_______|

// gro protocol - avalanche subgraph: https://github.com/groLabs/gro-subgraph-avalanche

/// @notice Contains token-related utility functions

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
    NUM,
    TOKEN as Token,
} from '../utils/constants';
import {
    log,
    BigInt,
    BigDecimal,
} from '@graphprotocol/graph-ts';
import {
    vaultDai_1_0_Address,
    vaultUsdc_1_0_Address,
    vaultUsdt_1_0_Address,
    vaultDai_1_5_Address,
    vaultUsdc_1_5_Address,
    vaultUsdt_1_5_Address,
    vaultDai_1_6_Address,
    vaultUsdc_1_6_Address,
    vaultUsdt_1_6_Address,
    vaultDai_1_7_Address,
    vaultUsdc_1_7_Address,
    vaultUsdt_1_7_Address,
} from '../utils/contracts';
const ZERO_RESULT = [NUM.ZERO, NUM.ZERO, NUM.ZERO];


/// @notice Converts a BigInt to BigDecimal
/// @param amount the amount to be converted
/// @param factor the base conversion factor (1eN)
/// @param decimals the decimal precision (normally 7)
/// @return the converted BigDecimal
export function tokenToDecimal(
    amount: BigInt,
    factor: i32,
    decimals: i32,
): BigDecimal {
    const scale = BigInt.fromI32(10)
        .pow(factor as u8)
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

/// @return current price, estimated price & final price given a token
export const getPricePerShare = (token: string): BigDecimal[] => {
    if (token === Token.GRO_DAI_E_VAULT_V1_0) {
        const contract = dai_v1_0.bind(vaultDai_1_0_Address);
        return callPricePerShare(contract, token);
    } else if (token === Token.GRO_USDC_E_VAULT_V1_0) {
        const contract = usdc_v1_0.bind(vaultUsdc_1_0_Address);
        return callPricePerShare(contract, token);
    } else if (token === Token.GRO_USDT_E_VAULT_V1_0) {
        const contract = usdt_v1_0.bind(vaultUsdt_1_0_Address);
        return callPricePerShare(contract, token);
    } else if (token === Token.GRO_DAI_E_VAULT_V1_5) {
        const contract = dai_v1_5.bind(vaultDai_1_5_Address);
        return callPricePerShare(contract, token);
    } else if (token === Token.GRO_USDC_E_VAULT_V1_5) {
        const contract = usdc_v1_5.bind(vaultUsdc_1_5_Address);
        return callPricePerShare(contract, token);
    } else if (token === Token.GRO_USDT_E_VAULT_V1_5) {
        const contract = usdt_v1_5.bind(vaultUsdt_1_5_Address);
        return callPricePerShare(contract, token);
    } else if (token === Token.GRO_DAI_E_VAULT_V1_6) {
        const contract = dai_v1_6.bind(vaultDai_1_6_Address);
        return callPricePerShare(contract, token);
    } else if (token === Token.GRO_USDC_E_VAULT_V1_6) {
        const contract = usdc_v1_6.bind(vaultUsdc_1_6_Address);
        return callPricePerShare(contract, token);
    } else if (token === Token.GRO_USDT_E_VAULT_V1_6) {
        const contract = usdt_v1_6.bind(vaultUsdt_1_6_Address);
        return callPricePerShare(contract, token);
    } else if (token === Token.GRO_DAI_E_VAULT_V1_7) {
        const contract = dai_v1_7.bind(vaultDai_1_7_Address);
        return callPricePerShare(contract, token);
    } else if (token === Token.GRO_USDC_E_VAULT_V1_7) {
        const contract = usdc_v1_7.bind(vaultUsdc_1_7_Address);
        return callPricePerShare(contract, token);
    } else if (token === Token.GRO_USDT_E_VAULT_V1_7) {
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

/// @return current price, estimated price & final price given a Vault contract & token
function callPricePerShare<T>(
    contract: T,
    token: string
): BigDecimal[] {
    if (contract) {
        //@ts-ignore
        const getPricePerShare = contract.try_getPricePerShare();
        //@ts-ignore
        const getTotalEstimatedAssets = contract.try_totalEstimatedAssets();
        //@ts-ignore
        const getTotalSupply = contract.try_totalSupply();
        const path = 'src/utils/tokens.ts->callPricePerShare():';
        if (getPricePerShare.reverted) {
            log.error(`${path} call reverted on getPricePerShare()`, []);
            return ZERO_RESULT;
        } else if (getTotalEstimatedAssets.reverted) {
            log.error(`${path} call reverted on totalEstimatedAssets()`, []);
            return ZERO_RESULT;
        } else if (getTotalSupply.reverted) {
            log.error(`${path} call reverted on getTotalSupply()`, []);
            return ZERO_RESULT;
        } else {
            const base = token.includes('DAI')
                ? 18
                : 6;
            const totalEstimatedAssets = tokenToDecimal(getTotalEstimatedAssets.value, base, 0);
            const totalSupply = tokenToDecimal(getTotalSupply.value, base, 0);
            const estimatedPricePerShare = (totalSupply.notEqual(NUM.ZERO))
                ? totalEstimatedAssets.div(totalSupply)
                : NUM.ZERO;
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
