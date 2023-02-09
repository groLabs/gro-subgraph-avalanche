import { Strategy as Strat } from '../types/strats';


export const getStrategies = (): Strat[] => {
    const strats = [
        new Strat(
            '0x4c7ea5b8032c5ea82ddf617dac7972c70e0c0478', // strategy address
            '0x5e57e11483a3f60a76af3045303604522059da2a', // vault address (GVault)
            'ah_DAI.e_strat',               // strategy name
            'DAI.e AH',                     // strategy display name
            'groDAI.e_vault',               // vault name
            'Gro Labs DAI.e AVAX Vault',    // vault display name
            'DAI.e',        // coin
            'groDAI.e',     // metacoin
            'ah',           // protocol
            true,           // active
            0,              // order
        ),
        new Strat(
            '0x247af6e106549033d3a65354fc3a72ff3794fa99', // strategy address
            '0x57daed1ee021be9991f5d30cf494b6b09b5b449e', // vault address (GVault)
            'ah_USDC.e_strat',              // strategy name
            'USDC.e AH',                    // strategy display name
            'groUSDC.e_vault',              // vault name
            'Gro Labs USDC.e AVAX Vault',   // vault display name
            'USDC.e',       // coin
            'groUSDC.e',    // metacoin
            'ah',           // protocol
            true,           // active
            1,              // order
        ),
        new Strat(
            '0x94a7c3419504cea9fba06ee739717b236ada0638', // strategy address
            '0x471f4b4b9a97f82c3a25b034b33a8e306ee9beb5', // vault address (GVault)
            'ah_USDT.e_strat',              // strategy name
            'USDT.e AH',                    // strategy display name
            'groUSDT.e_vault',              // vault name
            'Gro Labs USDT.e AVAX Vault',   // vault display name
            'USDT.e',       // coin
            'groUSDT.e',    // metacoin
            'ah',           // protocol
            true,           // active
            2,              // order
        ),
    ];
    return strats;
}
