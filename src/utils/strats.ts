import { Strategy as Strat } from '../types/strats';


export const getStrategies = (): Strat[] => {
    const strats = [
        new Strat(
            '0x4c7ea5b8032c5ea82ddf617dac7972c70e0c0478', // strategy address
            '0x5e57e11483a3f60a76af3045303604522059da2a', // vault address
            'ah_DAI.e_strat',               // strategy name
            'DAI.e AH',                     // strategy display name
            'groDAI.e_vault',               // vault name
            'Gro Labs DAI.e AVAX Vault',    // vault display name
            'DAI.e',        // coin
            'groDAI.e',     // metacoin
            'ah',           // protocol
            '2000000',      // tvl cap
            true,           // active
            0,              // order
        ),
        new Strat(
            '0x247af6e106549033d3a65354fc3a72ff3794fa99', // strategy address
            '0x57daed1ee021be9991f5d30cf494b6b09b5b449e', // vault address
            'ah_USDC.e_strat',              // strategy name
            'USDC.e AH',                    // strategy display name
            'groUSDC.e_vault',              // vault name
            'Gro Labs USDC.e AVAX Vault',   // vault display name
            'USDC.e',       // coin
            'groUSDC.e',    // metacoin
            'ah',           // protocol
            '2000000',      // tvl cap
            true,           // active
            1,              // order
        ),
        new Strat(
            '0x94a7c3419504cea9fba06ee739717b236ada0638', // strategy address
            '0x471f4b4b9a97f82c3a25b034b33a8e306ee9beb5', // vault address
            'ah_USDT.e_strat',              // strategy name
            'USDT.e AH',                    // strategy display name
            'groUSDT.e_vault',              // vault name
            'Gro Labs USDT.e AVAX Vault',   // vault display name
            'USDT.e',       // coin
            'groUSDT.e',    // metacoin
            'ah',           // protocol
            '2000000',      // tvl cap
            true,           // active
            2,              // order
        ),
        new Strat(
            '0xe0d6eff0f64da98b2c0e47102d59709b24cfc76f', // strategy address
            '0x82e40e1626ebb4076419b49b9403d9ce2425b956', // vault address
            'ah_DAI.e_strat_v1_5',               // strategy name
            'DAI.e AH v1.5',                     // strategy display name
            'groDAI.e_vault_v1_5',               // vault name
            'Gro Labs DAI.e AVAX Vault v1.5',    // vault display name
            'DAI.e',        // coin
            'groDAI.e',     // metacoin
            'ah',           // protocol
            '10000000',     // tvl cap
            true,           // active
            3,              // order
        ),
        new Strat(
            '0x45fa601854326de028b982df9839a27d22f36344', // strategy address
            '0x6518beca1c20221cf6e8ba6f77b85818d1a298e7', // vault address
            'ah_USDC.e_strat_v1_5',               // strategy name
            'USDC.e AH v1.5',                     // strategy display name
            'groUSDC.e_vault_v1_5',               // vault name
            'Gro Labs USDC.e AVAX Vault v1.5',    // vault display name
            'USDC.e',       // coin
            'groUSDC.e',    // metacoin
            'ah',           // protocol
            '10000000',     // tvl cap
            true,           // active
            4,              // order
        ),
        new Strat(
            '0xb29380360a44a7630f404c7609114e48fde0ddee', // strategy address
            '0x95284d91e69beacaaf90ad6fd3d6c959eb900ba4', // vault address
            'ah_USDT.e_strat_v1_5',               // strategy name
            'USDT.e AH v1.5',                     // strategy display name
            'groUSDT.e_vault_v1_5',               // vault name
            'Gro Labs USDT.e AVAX Vault v1.5',    // vault display name
            'USDT.e',       // coin
            'groUSDT.e',    // metacoin
            'ah',           // protocol
            '10000000',     // tvl cap
            true,           // active
            5,              // order
        ),
        new Strat(
            '0xb7a4ed26da881196c3da388b46cd290fd92aacc8', // strategy address
            '0xbed10235a181020f2b3a974c5c9c5454b7414635', // vault address
            'ah_DAI.e_strat_v1_6',               // strategy name
            'DAI.e AH v1.6',                     // strategy display name
            'groDAI.e_vault_v1_6',               // vault name
            'Gro Labs DAI.e AVAX Vault v1.6',    // vault display name
            'DAI.e',        // coin
            'groDAI.e',     // metacoin
            'ah',           // protocol
            '10000000',     // tvl cap
            true,           // active
            6,              // order
        ),
        new Strat(
            '0x21da4b3b6738adb122dedbfa722cdab6fa29d4ac', // strategy address
            '0x72681d8dfce95b275fd5d2bfba199f78c9b0d7ba', // vault address
            'ah_USDC.e_strat_v1_6',               // strategy name
            'USDC.e AH v1.6',                     // strategy display name
            'groUSDC.e_vault_v1_6',               // vault name
            'Gro Labs USDC.e AVAX Vault v1.6',    // vault display name
            'USDC.e',       // coin
            'groUSDC.e',    // metacoin
            'ah',           // protocol
            '10000000',     // tvl cap
            true,           // active
            7,              // order
        ),
        new Strat(
            '0x9889d8cdcdf4f5a0f30378c909a8930cf0fed2f4', // strategy address
            '0xad6c0751e4fcdca0926174248f67184880a1dbbd', // vault address
            'ah_USDT.e_strat_v1_6',               // strategy name
            'USDT.e AH v1.6',                     // strategy display name
            'groUSDT.e_vault_v1_6',               // vault name
            'Gro Labs USDT.e AVAX Vault v1.6',    // vault display name
            'USDT.e',       // coin
            'groUSDT.e',    // metacoin
            'ah',           // protocol
            '10000000',     // tvl cap
            true,           // active
            8,              // order
        ),
        new Strat(
            '0x670ea3f675a332d561d5a9ecaa16c097ac0b0ba5', // strategy address
            '0x6063597b9356b246e706fd6a48c780f897e3ef55', // vault address
            'ah_DAI.e_strat_v1_7',               // strategy name
            'DAI.e AH v1.7',                     // strategy display name
            'groDAI.e_vault_v1_7',               // vault name
            'Gro Labs DAI.e AVAX Vault v1.7',    // vault display name
            'DAI.e',        // coin
            'groDAI.e',     // metacoin
            'ah',           // protocol
            '2000000',      // tvl cap
            true,           // active
            9,              // order
        ),
        new Strat(
            '0xa797c615fc49a39363fdfa3398e8d524756e9a13', // strategy address
            '0x2eb05cffa24309b9aaf300392a4d8db745d4e592', // vault address
            'ah_USDC.e_strat_v1_7',               // strategy name
            'USDC.e AH v1.7',                     // strategy display name
            'groUSDC.e_vault_v1_7',               // vault name
            'Gro Labs USDC.e AVAX Vault v1.7',    // vault display name
            'USDC.e',       // coin
            'groUSDC.e',    // metacoin
            'ah',           // protocol
            '2000000',      // tvl cap
            true,           // active
            10,              // order
        ),
        new Strat(
            '0x370e6e9cd875db40293f9dba86361ca7ff399b63', // strategy address
            '0x6ef44077a1f5e10cdfccc30efb7dcdb1d5475581', // vault address
            'ah_USDT.e_strat_v1_7',               // strategy name
            'USDT.e AH v1.7',                     // strategy display name
            'groUSDT.e_vault_v1_7',               // vault name
            'Gro Labs USDT.e AVAX Vault v1.7',    // vault display name
            'USDT.e',       // coin
            'groUSDT.e',    // metacoin
            'ah',           // protocol
            '2000000',      // tvl cap
            true,           // active
            11,              // order
        ),
    ];
    return strats;
}
