import {
    Bytes,
    Address,
    BigDecimal,
} from "@graphprotocol/graph-ts";


// Numbers
export const DECIMALS = 7;
export const ZERO = BigDecimal.fromString('0');
export const ONE = BigDecimal.fromString('1');

// Addresses
export const NO_ADDR = Bytes.empty();
export const ZERO_ADDR = Address.fromString('0x0000000000000000000000000000000000000000');

// Contract addresses
export const VAULT_DAI_v1_0_ADDRESS = Address.fromString('0x5E57E11483A3F60A76af3045303604522059dA2a');
export const VAULT_USDC_v1_0_ADDRESS = Address.fromString('0x57DaED1ee021BE9991F5d30CF494b6B09B5B449E');
export const VAULT_USDT_v1_0_ADDRESS = Address.fromString('0x471F4B4b9A97F82C3a25b034B33A8E306eE9Beb5');
export const VAULT_DAI_v1_7_ADDRESS = Address.fromString('0x6063597B9356B246E706Fd6A48C780F897e3ef55');
export const VAULT_USDC_v1_7_ADDRESS = Address.fromString('0x2Eb05cfFA24309b9aaf300392A4D8Db745d4E592');
export const VAULT_USDT_v1_7_ADDRESS = Address.fromString('0x6EF44077a1F5e10cDfcCc30EFb7dCdb1d5475581');
export const VAULT_DAI_v1_9i_ADDRESS = Address.fromString('0x7b2f293B2164c70834C134Dc6bA61e6B6119f0b5');
export const VAULT_USDC_v1_9i_ADDRESS = Address.fromString('0x6FfF1e1140034897f5b370b931Fbd7e4970FE130');
export const VAULT_USDT_v1_9i_ADDRESS = Address.fromString('0xcc20CE15425A89614bD7a3B539a3c966FA7fFBC2');

export const VAULTS = [
    VAULT_DAI_v1_0_ADDRESS,
    VAULT_USDC_v1_0_ADDRESS,
    VAULT_USDT_v1_0_ADDRESS,
    VAULT_DAI_v1_7_ADDRESS,
    VAULT_USDC_v1_7_ADDRESS,
    VAULT_USDT_v1_7_ADDRESS,
    VAULT_DAI_v1_9i_ADDRESS,
    VAULT_USDC_v1_9i_ADDRESS,
    VAULT_USDT_v1_9i_ADDRESS,
];
