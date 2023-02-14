import { NUM } from '../utils/constants';
import { Price } from '../../generated/schema';
import { tokenToDecimal } from '../utils/tokens';
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


const initPrice = (): Price => {
    let price = Price.load('0x');
    if (!price) {
        price = new Price('0x');
        price.groDAI_e_v1_0 = NUM.ZERO;
        price.groUSDC_e_v1_0 = NUM.ZERO;
        price.groUSDT_e_v1_0 = NUM.ZERO;
        price.groDAI_e_v1_5 = NUM.ZERO;
        price.groUSDC_e_v1_5 = NUM.ZERO;
        price.groUSDT_e_v1_5 = NUM.ZERO;
        price.groDAI_e_v1_6 = NUM.ZERO;
        price.groUSDC_e_v1_6 = NUM.ZERO;
        price.groUSDT_e_v1_6 = NUM.ZERO;
        price.groDAI_e_v1_7 = NUM.ZERO;
        price.groUSDC_e_v1_7 = NUM.ZERO;
        price.groUSDT_e_v1_7 = NUM.ZERO;
    }
    return price;
}

export const setLatestPrice = (token: string): void => {
    let price = initPrice();
    if (token === 'groDAI_e_vault_v1_0') {
        const contract = dai_v1_0.bind(vaultDai_1_0_Address);
        price.groDAI_e_v1_0 = callPricePerShare(contract, token);
    } else if (token === 'groUSDC_e_vault_v1_0') {
        const contract = usdc_v1_0.bind(vaultUsdc_1_0_Address);
        price.groUSDC_e_v1_0 = callPricePerShare(contract, token);
    } else if (token === 'groUSDT_e_vault_v1_0') {
        const contract = usdt_v1_0.bind(vaultUsdt_1_0_Address);
        price.groUSDT_e_v1_0 = callPricePerShare(contract, token);
    } else if (token === 'groDAI_e_vault_v1_5') {
        const contract = dai_v1_5.bind(vaultDai_1_5_Address);
        price.groDAI_e_v1_5 = callPricePerShare(contract, token);
    } else if (token === 'groUSDC_e_vault_v1_5') {
        const contract = usdc_v1_5.bind(vaultUsdc_1_5_Address);
        price.groUSDC_e_v1_5 = callPricePerShare(contract, token);
    } else if (token === 'groUSDT_e_vault_v1_5') {
        const contract = usdt_v1_5.bind(vaultUsdt_1_5_Address);
        price.groUSDT_e_v1_5 = callPricePerShare(contract, token);
    } else if (token === 'groDAI_e_vault_v1_6') {
        const contract = dai_v1_6.bind(vaultDai_1_6_Address);
        price.groDAI_e_v1_6 = callPricePerShare(contract, token);
    } else if (token === 'groUSDC_e_vault_v1_6') {
        const contract = usdc_v1_6.bind(vaultUsdc_1_6_Address);
        price.groUSDC_e_v1_6 = callPricePerShare(contract, token);
    } else if (token === 'groUSDT_e_vault_v1_6') {
        const contract = usdt_v1_6.bind(vaultUsdt_1_6_Address);
        price.groUSDT_e_v1_6 = callPricePerShare(contract, token);
    } else if (token === 'groDAI_e_vault_v1_7') {
        const contract = dai_v1_7.bind(vaultDai_1_7_Address);
        price.groDAI_e_v1_7 = callPricePerShare(contract, token);
    } else if (token === 'groUSDC_e_vault_v1_7') {
        const contract = usdc_v1_7.bind(vaultUsdc_1_7_Address);
        price.groUSDC_e_v1_7 = callPricePerShare(contract, token);
    } else if (token === 'groUSDT_e_vault_v1_7') {
        const contract = usdt_v1_7.bind(vaultUsdt_1_7_Address);
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
            return NUM.ZERO;
        } else {
            const base = token.includes('DAI')
                ? 18
                : 6;
            return tokenToDecimal(pps.value, base, 6);
        }
    } else {
        log.error('src/setters/price.ts->callPricePerShare(): no contract found', []);
        return NUM.ZERO;
    }
}
