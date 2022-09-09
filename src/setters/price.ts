import { Price } from '../../generated/schema';
import { VaultAdaptorMK2_v1_0 as dai_v1_0 } from '../../generated/avaxdaivault_v1_0/VaultAdaptorMK2_v1_0';
import { VaultAdaptorMK2_v1_0 as usdc_v1_0 } from '../../generated/avaxusdcvault_v1_0/VaultAdaptorMK2_v1_0';
import { VaultAdaptorMK2_v1_0 as usdt_v1_0 } from '../../generated/avaxusdtvault_v1_0/VaultAdaptorMK2_v1_0';
import { VaultAdaptorMK2_v1_7 as dai_v1_7 } from '../../generated/avaxdaivault_v1_7/VaultAdaptorMK2_v1_7';
import { VaultAdaptorMK2_v1_7 as usdc_v1_7 } from '../../generated/avaxusdcvault_v1_7/VaultAdaptorMK2_v1_7';
import { VaultAdaptorMK2_v1_7 as usdt_v1_7 } from '../../generated/avaxusdtvault_v1_7/VaultAdaptorMK2_v1_7';
import {
    log,
    BigDecimal,
} from '@graphprotocol/graph-ts';
import {
    ZERO,
    VAULT_DAI_v1_0_ADDRESS,
    VAULT_USDC_v1_0_ADDRESS,
    VAULT_USDT_v1_0_ADDRESS,
    VAULT_DAI_v1_7_ADDRESS,
    VAULT_USDC_v1_7_ADDRESS,
    VAULT_USDT_v1_7_ADDRESS,
} from '../utils/constants';
import { tokenToDecimal } from '../utils/tokens';


const initPrice = (): Price => {
    let price = Price.load('0x');
    if (!price) {
        price = new Price('0x');
        price.groDAI_e_v1_0 = ZERO;
        price.groUSDC_e_v1_0 = ZERO;
        price.groUSDT_e_v1_0 = ZERO;
        price.groDAI_e_v1_7 = ZERO;
        price.groUSDC_e_v1_7 = ZERO;
        price.groUSDT_e_v1_7 = ZERO;
    }
    return price;
}

export const setLatestPrice = (token: string): void => {
    let price = initPrice();
    if (token === 'groDAI_e_vault_v1_0') {
        const contract = dai_v1_0.bind(VAULT_DAI_v1_0_ADDRESS);
        price.groDAI_e_v1_0 = callPricePerShare(contract, token);
    } else if (token === 'groUSDC_e_vault_v1_0') {
        const contract = usdc_v1_0.bind(VAULT_USDC_v1_0_ADDRESS);
        price.groUSDC_e_v1_0 = callPricePerShare(contract, token);
    } else if (token === 'groUSDT_e_vault_v1_0') {
        const contract = usdt_v1_0.bind(VAULT_USDT_v1_0_ADDRESS);
        price.groUSDT_e_v1_0 = callPricePerShare(contract, token);
    } else if (token === 'groDAI_e_vault_v1_7') {
        const contract = dai_v1_7.bind(VAULT_DAI_v1_7_ADDRESS);
        price.groDAI_e_v1_7 = callPricePerShare(contract, token);
    } else if (token === 'groUSDC_e_vault_v1_7') {
        const contract = usdc_v1_7.bind(VAULT_USDC_v1_7_ADDRESS);
        price.groUSDC_e_v1_7 = callPricePerShare(contract, token);
    } else if (token === 'groUSDT_e_vault_v1_7') {
        const contract = usdt_v1_7.bind(VAULT_USDT_v1_7_ADDRESS);
        price.groUSDT_e_v1_7 = callPricePerShare(contract, token);
    } else {
        log.error('src/setters/price.ts->setLatestPrice(): no gro token found', []);
    }
    price.save();
}

function callPricePerShare<T>(contract: T, token: string): BigDecimal {
    if (contract) {
        //@ts-ignore
        const pps = contract.try_getPricePerShare();
        if (pps.reverted) {
            log.error('src/utils/price.ts->callPricePerShare(): call reverted on getPricePerShare()', []);
            return ZERO;
        } else {
            const base = token.includes('DAI')
                ? 18
                : 6;
            return tokenToDecimal(pps.value, base, 6);
        }
    } else {
        log.error('src/setters/price.ts->callPricePerShare(): no contract found', []);
        return ZERO;
    }
}
