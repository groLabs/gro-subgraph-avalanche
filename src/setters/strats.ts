// SPDX-License-Identifier: AGPLv3

//  ________  ________  ________
//  |\   ____\|\   __  \|\   __  \
//  \ \  \___|\ \  \|\  \ \  \|\  \
//   \ \  \  __\ \   _  _\ \  \\\  \
//    \ \  \|\  \ \  \\  \\ \  \\\  \
//     \ \_______\ \__\\ _\\ \_______\
//      \|_______|\|__|\|__|\|_______|

// gro protocol - avalanche subgraph: https://github.com/groLabs/gro-subgraph-avalanche

/// @notice Initialises entity <Strategy> and updates total assets & deposit limit

import { getStrategies } from '../utils/strats';
import { tokenToDecimal } from '../utils/tokens';
import { Strategy } from '../../generated/schema';
import { VaultAdaptorMK2_v1_7 as vault_v1_7 } from '../../generated/avaxdaivault_v1_7/VaultAdaptorMK2_v1_7';
import {
    NUM,
    DECIMALS,
} from '../utils/constants';
import {
    log,
    Address,
    BigDecimal,
} from '@graphprotocol/graph-ts';


/// @notice Initialises entity <Strategy> with default values
/// @dev
///  - Static data for strategies is defined at /utils/strats.ts->getStrategies()
///  - This function is called once through /setters/masterdata.ts->initMasterDataOnce()
export const initAllStrategies = (): void => {
    const strats = getStrategies();
    for (let i = 0; i < strats.length; i++) {
        const str = strats[i];
        if (str.active) {
            let strat = new Strategy(str.id);
            strat.coin = str.coin;
            strat.metacoin = str.metacoin;
            strat.protocol = str.protocol;
            strat.strat_name = str.strat_name;
            strat.strat_display_name = str.strat_display_name;
            strat.vault_name = str.vault_name;
            strat.vault_display_name = str.vault_display_name;
            strat.vault_address = str.vault;
            strat.total_assets_strategy = NUM.ZERO;
            strat.total_assets_vault = NUM.ZERO;
            strat.strategy_debt = NUM.ZERO;
            strat.tvl_cap = BigDecimal.fromString(str.tvl_cap);
            strat.order = i32(str.order);
            strat.save();
        }
    }
}

/// @notice Updates total assets vault/strategy in entity <Strategy>
/// @dev Triggered by <LogStrategyReported>, <LogNewStrategyHarvest> and 
///      <LogWithdrawal> events from Vault contracts
/// @param strategyAddress the strategy address
/// @param vaultAddress the vault address
/// @param factor the factor (18 for dai, 6 for usdc & usdt)
export const updateTotalAssets = (
    strategyAddress: Address,
    vaultAddress: Address,
    factor: i32,
): void => {
    let strat = Strategy.load(strategyAddress);
    if (strat) {
        const contract = vault_v1_7.bind(vaultAddress);
        const vaultAssets = contract.try_totalEstimatedAssets();
        if (vaultAssets.reverted) {
            log.error('updateTotalAssets(): try_totalEstimatedAssets() reverted in /setters/strats.ts', []);
        } else {
            strat.total_assets_vault = tokenToDecimal(
                vaultAssets.value,
                factor,
                DECIMALS,
            );
        }
        const strategyAssets = contract.try_strategies(strategyAddress);
        if (strategyAssets.reverted) {
            log.error('updateTotalAssets(): try_strategies() reverted in /setters/strats.ts', []);
        } else {
            strat.total_assets_strategy = tokenToDecimal(
                strategyAssets.value.getTotalDebt(),
                factor,
                DECIMALS,
            );
        }
        strat.save();
    } else {
        log.warning(
            'updateTotalAssets(): srategy {} does not exist in /setters/strats.ts',
            [strategyAddress.toHexString()]
        );
    }
}

/// @notice Updates the deposit limit in entity <Strategy>
/// @dev Triggered by <LogDepositLimit> from Vault contracts
/// @param strategyAddress the strategy address
/// @param depositLimit the deposit limit
export const setDepositLimit = (
    strategyAddress: Address,
    depositLimit: BigDecimal,
): void => {
    let strat = Strategy.load(strategyAddress);
    if (strat) {
        strat.tvl_cap = depositLimit;
        strat.save();
    } else {
        log.warning(
            'setDepositLimit(): srategy {} does not exist in /setters/strats.ts',
            [strategyAddress.toHexString()]
        );
    }
}
