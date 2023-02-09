import { Price } from '../../generated/schema';
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
    BigDecimal,
} from '@graphprotocol/graph-ts';
import {
    ZERO,
} from '../utils/constants';
import { tokenToDecimal } from '../utils/tokens';

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


const initPrice = (): Price => {
    let price = Price.load('0x');
    if (!price) {
        price = new Price('0x');
        price.groDAI_e_v1_0 = ZERO;
        price.groUSDC_e_v1_0 = ZERO;
        price.groUSDT_e_v1_0 = ZERO;
        price.groDAI_e_v1_5 = ZERO;
        price.groUSDC_e_v1_5 = ZERO;
        price.groUSDT_e_v1_5 = ZERO;
        price.groDAI_e_v1_6 = ZERO;
        price.groUSDC_e_v1_6 = ZERO;
        price.groUSDT_e_v1_6 = ZERO;
        price.groDAI_e_v1_7 = ZERO;
        price.groUSDC_e_v1_7 = ZERO;
        price.groUSDT_e_v1_7 = ZERO;
    }
    return price;
}

// todo: get addresses from addresses.ts
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
        price.groUSDT_e_v1_0 = callPricePerShare(contract, token);
    } else if (token === 'groDAI_e_vault_v1_6') {
        const contract = dai_v1_6.bind(vaultDai_1_6_Address);
        price.groDAI_e_v1_6 = callPricePerShare(contract, token);
    } else if (token === 'groUSDC_e_vault_v1_6') {
        const contract = usdc_v1_6.bind(vaultUsdc_1_6_Address);
        price.groUSDC_e_v1_6 = callPricePerShare(contract, token);
    } else if (token === 'groUSDT_e_vault_v1_6') {
        const contract = usdt_v1_6.bind(vaultUsdt_1_6_Address);
        price.groUSDT_e_v1_0 = callPricePerShare(contract, token);
    } else if (token === 'groDAI_e_vault_v1_7') {
        const contract = dai_v1_7.bind(vaultDai_1_7_Address);
        price.groDAI_e_v1_7 = callPricePerShare(contract, token);
    } else if (token === 'groUSDC_e_vault_v1_7') {
        const contract = usdc_v1_7.bind(vaultUsdc_1_7_Address);
        price.groUSDC_e_v1_7 = callPricePerShare(contract, token);
    } else if (token === 'groUSDT_e_vault_v1_7') {
        const contract = usdt_v1_7.bind(vaultUsdt_1_7_Address);
        price.groUSDT_e_v1_0 = callPricePerShare(contract, token);
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
