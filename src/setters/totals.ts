import { BigDecimal } from '@graphprotocol/graph-ts';
import { Totals } from '../../generated/schema';
import { ZERO } from '../utils/constants';


export const setTotals = (
    type: string,
    coin: string,
    userAddress: string,
    coinAmount: BigDecimal,
    usdAmount: BigDecimal,
): void => {
    let total = Totals.load(userAddress);

    if (!total) {
        total = new Totals(userAddress);
        total.userAddress = userAddress;
        total.amount_added_groDAI_e_v1_0 = ZERO;
        total.amount_added_groUSDC_e_v1_0 = ZERO;
        total.amount_added_groUSDT_e_v1_0 = ZERO;
        total.amount_added_groDAI_e_v1_7 = ZERO;
        total.amount_added_groUSDC_e_v1_7 = ZERO;
        total.amount_added_groUSDT_e_v1_7 = ZERO;
        total.amount_added_total = ZERO;
        total.amount_removed_groDAI_e_v1_0 = ZERO;
        total.amount_removed_groUSDC_e_v1_0 = ZERO;
        total.amount_removed_groUSDT_e_v1_0 = ZERO;
        total.amount_removed_groDAI_e_v1_7 = ZERO;
        total.amount_removed_groUSDC_e_v1_7 = ZERO;
        total.amount_removed_groUSDT_e_v1_7 = ZERO;
        total.amount_removed_total = ZERO;
        total.value_added_groDAI_e_v1_0 = ZERO;
        total.value_added_groUSDC_e_v1_0 = ZERO;
        total.value_added_groUSDT_e_v1_0 = ZERO;
        total.value_added_groDAI_e_v1_7 = ZERO;
        total.value_added_groUSDC_e_v1_7 = ZERO;
        total.value_added_groUSDT_e_v1_7 = ZERO;
        total.value_added_total = ZERO;
        total.value_removed_groDAI_e_v1_0 = ZERO;
        total.value_removed_groUSDC_e_v1_0 = ZERO;
        total.value_removed_groUSDT_e_v1_0 = ZERO;
        total.value_removed_groDAI_e_v1_7 = ZERO;
        total.value_removed_groUSDC_e_v1_7 = ZERO;
        total.value_removed_groUSDT_e_v1_7 = ZERO;
        total.value_removed_total = ZERO;
        total.net_value_groDAI_e_v1_0 = ZERO;
        total.net_value_groUSDC_e_v1_0 = ZERO;
        total.net_value_groUSDT_e_v1_0 = ZERO;
        total.net_value_groDAI_e_v1_7 = ZERO;
        total.net_value_groUSDC_e_v1_7 = ZERO;
        total.net_value_groUSDT_e_v1_7 = ZERO;
        total.net_value_total = ZERO;
    }

    if (type === 'deposit' || type === 'transfer_in') {
        if (coin === 'groDAI_e_vault_v1_0') {
            total.amount_added_groDAI_e_v1_0 = total.amount_added_groDAI_e_v1_0.plus(coinAmount);
            total.value_added_groDAI_e_v1_0 = total.value_added_groDAI_e_v1_0.plus(usdAmount);
            total.net_value_groDAI_e_v1_0 = total.net_value_groDAI_e_v1_0.plus(usdAmount);
        } else if (coin === 'groUSDC_e_vault_v1_0') {
            total.amount_added_groUSDC_e_v1_0 = total.amount_added_groUSDC_e_v1_0.plus(coinAmount);
            total.value_added_groUSDC_e_v1_0 = total.value_added_groUSDC_e_v1_0.plus(usdAmount);
            total.net_value_groUSDC_e_v1_0 = total.net_value_groUSDC_e_v1_0.plus(usdAmount);
        } else if (coin === 'groUSDT_e_vault_v1_0') {
            total.amount_added_groUSDT_e_v1_0 = total.amount_added_groUSDT_e_v1_0.plus(coinAmount);
            total.value_added_groUSDT_e_v1_0 = total.value_added_groUSDT_e_v1_0.plus(usdAmount);
            total.net_value_groUSDT_e_v1_0 = total.net_value_groUSDT_e_v1_0.plus(usdAmount);
        } else if (coin === 'groDAI_e_vault_v1_7') {
            total.amount_added_groDAI_e_v1_7 = total.amount_added_groDAI_e_v1_7.plus(coinAmount);
            total.value_added_groDAI_e_v1_7 = total.value_added_groDAI_e_v1_7.plus(usdAmount);
            total.net_value_groDAI_e_v1_7 = total.net_value_groDAI_e_v1_7.plus(usdAmount);
        } else if (coin === 'groUSDC_e_vault_v1_7') {
            total.amount_added_groUSDC_e_v1_7 = total.amount_added_groUSDC_e_v1_7.plus(coinAmount);
            total.value_added_groUSDC_e_v1_7 = total.value_added_groUSDC_e_v1_7.plus(usdAmount);
            total.net_value_groUSDC_e_v1_7 = total.net_value_groUSDC_e_v1_7.plus(usdAmount);
        } else if (coin === 'groUSDT_e_vault_v1_7') {
            total.amount_added_groUSDT_e_v1_7 = total.amount_added_groUSDT_e_v1_7.plus(coinAmount);
            total.value_added_groUSDT_e_v1_7 = total.value_added_groUSDT_e_v1_7.plus(usdAmount);
            total.net_value_groUSDT_e_v1_7 = total.net_value_groUSDT_e_v1_7.plus(usdAmount);
        }
        total.amount_added_total = total.amount_added_total.plus(coinAmount);
        total.value_added_total = total.value_added_total.plus(usdAmount);
        total.net_value_total = total.net_value_total.plus(usdAmount);

    } else if (type === 'withdrawal' || type === 'transfer_out') {

        if (coin === 'groDAI_e_vault_v1_0') {
            total.amount_removed_groDAI_e_v1_0 = total.amount_removed_groDAI_e_v1_0.plus(coinAmount);
            total.value_removed_groDAI_e_v1_0 = total.value_removed_groDAI_e_v1_0.plus(usdAmount);
            total.net_value_groDAI_e_v1_0 = total.net_value_groDAI_e_v1_0.minus(usdAmount);
        } else if (coin === 'groUSDC_e_vault_v1_0') {
            total.amount_removed_groUSDC_e_v1_0 = total.amount_removed_groUSDC_e_v1_0.plus(coinAmount);
            total.value_removed_groUSDC_e_v1_0 = total.value_removed_groUSDC_e_v1_0.plus(usdAmount);
            total.net_value_groUSDC_e_v1_0 = total.net_value_groUSDC_e_v1_0.minus(usdAmount);
        } else if (coin === 'groUSDT_e_vault_v1_0') {
            total.amount_removed_groUSDT_e_v1_0 = total.amount_removed_groUSDT_e_v1_0.plus(coinAmount);
            total.value_removed_groUSDT_e_v1_0 = total.value_removed_groUSDT_e_v1_0.plus(usdAmount);
            total.net_value_groUSDT_e_v1_0 = total.net_value_groUSDT_e_v1_0.minus(usdAmount);
        } else if (coin === 'groDAI_e_vault_v1_7') {
            total.amount_removed_groDAI_e_v1_7 = total.amount_removed_groDAI_e_v1_7.plus(coinAmount);
            total.value_removed_groDAI_e_v1_7 = total.value_removed_groDAI_e_v1_7.plus(usdAmount);
            total.net_value_groDAI_e_v1_7 = total.net_value_groDAI_e_v1_7.minus(usdAmount);
        } else if (coin === 'groUSDC_e_vault_v1_7') {
            total.amount_removed_groUSDC_e_v1_7 = total.amount_removed_groUSDC_e_v1_7.plus(coinAmount);
            total.value_removed_groUSDC_e_v1_7 = total.value_removed_groUSDC_e_v1_7.plus(usdAmount);
            total.net_value_groUSDC_e_v1_7 = total.net_value_groUSDC_e_v1_7.minus(usdAmount);
        } else if (coin === 'groUSDT_e_vault_v1_7') {
            total.amount_removed_groUSDT_e_v1_7 = total.amount_removed_groUSDT_e_v1_7.plus(coinAmount);
            total.value_removed_groUSDT_e_v1_7 = total.value_removed_groUSDT_e_v1_7.plus(usdAmount);
            total.net_value_groUSDT_e_v1_7 = total.net_value_groUSDT_e_v1_7.minus(usdAmount);
        }
        total.amount_removed_total = total.amount_removed_total.plus(coinAmount);
        total.value_removed_total = total.value_removed_total.plus(usdAmount);
        total.net_value_total = total.net_value_total.minus(usdAmount);
    }

    total.save();
}
