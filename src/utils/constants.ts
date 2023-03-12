import {
    Num,
    Addr,
    Token,
    TxType,
} from '../types/constants';
import {
    Bytes,
    BigDecimal,
} from "@graphprotocol/graph-ts";


// Numbers
export const DECIMALS = 7;
export const LAUNCH_TIMESTAMP_AVAX = 1638483222;
export const NUM: Num = {
    ZERO: BigDecimal.fromString('0'),
    ONE: BigDecimal.fromString('1'),
    MINUS_ONE: BigDecimal.fromString('-1'),
    THIRTY_PERCENT: BigDecimal.fromString('0.3'),
    GVT_START_FACTOR: BigDecimal.fromString('0.005'),
    PWRD_START_FACTOR: BigDecimal.fromString('1'),
}

// Addresses
export const ADDR: Addr = {
    ZERO: Bytes.fromHexString('0x0000000000000000000000000000000000000000'),
}

// Tokens
export const TOKEN: Token = {
    UNKNOWN: 'unknown',
    DAI_E: 'dai_e',
    USDC_E: 'usdc_e',
    USDT_E: 'usdt_e',
    GRO_DAI_E_VAULT_v1_0: 'groDAI_e_vault_v1_0',
    GRO_USDC_E_VAULT_V1_0: 'groUSDC_e_vault_v1_0',
    GRO_USDT_E_VAULT_V1_0: 'groUSDT_e_vault_v1_0',
    GRO_DAI_E_VAULT_V1_5: 'groDAI_e_vault_v1_5',
    GRO_USDC_E_VAULT_V1_5: 'groUSDC_e_vault_v1_5',
    GRO_USDT_E_VAULT_V1_5: 'groUSDT_e_vault_v1_5',
    GRO_DAI_E_VAULT_V1_6: 'groDAI_e_vault_v1_6',
    GRO_USDC_E_VAULT_V1_6: 'groUSDC_e_vault_v1_6',
    GRO_USDT_E_VAULT_V1_6: 'groUSDT_e_vault_v1_6',
    GRO_DAI_E_VAULT_V1_7: 'groDAI_e_vault_v1_7',
    GRO_USDC_E_VAULT_V1_7: 'groUSDC_e_vault_v1_7',
    GRO_USDT_E_VAULT_V1_7: 'groUSDT_e_vault_v1_7',
}

// Transaction types
export const TX_TYPE: TxType = {
    CORE_DEPOSIT: 'core_deposit',
    CORE_WITHDRAWAL: 'core_withdrawal',
    TRANSFER_IN: 'transfer_in',
    TRANSFER_OUT: 'transfer_out',
    APPROVAL: 'approval',
}
