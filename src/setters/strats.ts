
import { getStrategies } from '../utils/strats';
import { tokenToDecimal } from '../utils/tokens';
import { Strategy } from '../../generated/schema';
import { VaultAdaptorMK2_v1_0 as vault_v1_0 } from '../../generated/avaxdaivault_v1_0/VaultAdaptorMK2_v1_0';
import {
    log,
    Address,
} from '@graphprotocol/graph-ts';
import {
    NUM,
    DECIMALS,
} from '../utils/constants';


const noStrategy = (): Strategy => {
    let strat = new Strategy('0x');
    strat.coin = 'unknown';
    strat.metacoin = 'unknown';
    strat.protocol = 'unknown';
    strat.strat_name = 'unknown';
    strat.strat_display_name = 'unknown';
    strat.vault_name = 'unknown';
    strat.vault_display_name = 'unknown';
    strat.vault_address = Address.zero();
    strat.total_assets_strategy = NUM.ZERO;
    strat.total_assets_vault = NUM.ZERO;
    strat.strategy_debt = NUM.ZERO;
    strat.order = i32(0);
    return strat;
}

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
            strat.vault_address = Address.fromString(str.vault);
            strat.total_assets_strategy = NUM.ZERO;
            strat.total_assets_vault = NUM.ZERO;
            strat.strategy_debt = NUM.ZERO;
            strat.order = i32(str.order);
            strat.save();
        }
    }
}

export const initStrategy = (stratAddress: string): Strategy => {
    let strat = Strategy.load(stratAddress);
    if (!strat) {
        const strats = getStrategies();
        for (let i = 0; i < strats.length; i++) {
            const str = strats[i];
            if (str.active && str.id == stratAddress) {
                strat = new Strategy(str.id);
                strat.coin = str.coin;
                strat.metacoin = str.metacoin;
                strat.protocol = str.protocol;
                strat.strat_name = str.strat_name;
                strat.strat_display_name = str.strat_display_name;
                strat.vault_name = str.vault_name;
                strat.vault_display_name = str.vault_display_name;
                strat.vault_address = Address.fromString(str.vault);
                strat.total_assets_strategy = NUM.ZERO;
                strat.total_assets_vault = NUM.ZERO;
                strat.strategy_debt = NUM.ZERO;
                strat.order = i32(str.order);
                return strat;
            }
        }
        return noStrategy();
    }
    return strat;
}

export const setStrategy = (
    strategyAddress: Address,
    vaultAddress: Address,
    base: i32,
): void => {
    const id = strategyAddress.toHexString();
    let strat = initStrategy(id);
    const contract = vault_v1_0.bind(vaultAddress);
    const vaultAssets = contract.try_totalEstimatedAssets();
    if (vaultAssets.reverted) {
        log.error('setStrategy(): try_totalEstimatedAssets() reverted in /setters/strats.ts', []);
    } else {
        strat.total_assets_vault = tokenToDecimal(
            vaultAssets.value,
            base,
            DECIMALS,
        );
    }
    const strategyAssets = contract.try_strategies(strategyAddress);
    if (strategyAssets.reverted) {
        log.error('setStrategy(): try_strategies() reverted in /setters/strats.ts', []);
    } else {
        strat.total_assets_strategy = tokenToDecimal(
            strategyAssets.value.getTotalDebt(),
            base,
            DECIMALS,
        );
    }
    strat.save();
}
