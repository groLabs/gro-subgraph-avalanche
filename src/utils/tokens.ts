import { VaultAdaptorMK2_v1_0 as dai_v1_0 } from '../../generated/avaxdaivault_v1_0/VaultAdaptorMK2_v1_0';
import { VaultAdaptorMK2_v1_0 as usdc_v1_0 } from '../../generated/avaxusdcvault_v1_0/VaultAdaptorMK2_v1_0';
import { VaultAdaptorMK2_v1_0 as usdt_v1_0 } from '../../generated/avaxusdtvault_v1_0/VaultAdaptorMK2_v1_0';
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
    ONE,
    DECIMALS,
    VAULT_DAI_v1_0_ADDRESS,
    VAULT_USDC_v1_0_ADDRESS,
    VAULT_USDT_v1_0_ADDRESS,
    VAULT_DAI_v1_7_ADDRESS,
    VAULT_USDC_v1_7_ADDRESS,
    VAULT_USDT_v1_7_ADDRESS,
    // VAULT_DAI_v1_9i_ADDRESS,
    // VAULT_USDC_v1_9i_ADDRESS,
    // VAULT_USDT_v1_9i_ADDRESS,
} from '../utils/constants';


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
const getPricePerShare = (token: string): BigDecimal => {

    if (token === 'groDAI_e_vault_v1_0') {
        const contract = dai_v1_0.bind(VAULT_DAI_v1_0_ADDRESS);
        return callPricePerShare(contract, token);
    } else if (token === 'groUSDC_e_vault_v1_0') {
        const contract = usdc_v1_0.bind(VAULT_USDC_v1_0_ADDRESS);
        return callPricePerShare(contract, token);
    } else if (token === 'groUSDT_e_vault_v1_0') {
        const contract = usdt_v1_0.bind(VAULT_USDT_v1_0_ADDRESS);
        return callPricePerShare(contract, token);
    } else if (token === 'groDAI_e_vault_v1_7') {
        const contract = dai_v1_7.bind(VAULT_DAI_v1_7_ADDRESS);
        return callPricePerShare(contract, token);
    } else if (token === 'groUSDC_e_vault_v1_7') {
        const contract = usdc_v1_7.bind(VAULT_USDC_v1_7_ADDRESS);
        return callPricePerShare(contract, token);
    } else if (token === 'groUSDT_e_vault_v1_7') {
        const contract = usdt_v1_7.bind(VAULT_USDT_v1_7_ADDRESS);
        return callPricePerShare(contract, token);
    } else {
        log.error('src/utils/tokens.ts->getPricePerShare(): no gro token found', []);
        return ZERO;
    }
}

function callPricePerShare<T>(contract: T, token: string): BigDecimal {
    if (contract) {
        //@ts-ignore
        const pricePerShare = contract.try_getPricePerShare();
        if (pricePerShare.reverted) {
            log.error('src/utils/tokens.ts->callPricePerShare(): call reverted', []);
            return ZERO;
        } else {
            const base = token.includes('DAI')
                ? 18
                : 6;
            return tokenToDecimal(pricePerShare.value, base, 0);
        }
    } else {
        log.error('src/utils/tokens.ts->callPricePerShare(): no contract found', []);
        return ZERO;
    }
}

export {
    getPricePerShare,
    tokenToDecimal,
}
