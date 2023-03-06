import {
    Bytes,
    BigDecimal,
} from '@graphprotocol/graph-ts';
import { NUM } from '../utils/constants';
import { Totals } from '../../generated/schema';


const initTotals = (userAddress: Bytes): Totals => {
    let total = Totals.load(userAddress);
    if (!total) {
        total = new Totals(userAddress);
        total.user_address = userAddress;
        total.amount_added_groDAI_e_v1_0 = NUM.ZERO;
        total.amount_added_groUSDC_e_v1_0 = NUM.ZERO;
        total.amount_added_groUSDT_e_v1_0 = NUM.ZERO;
        total.amount_added_groDAI_e_v1_5 = NUM.ZERO;
        total.amount_added_groUSDC_e_v1_5 = NUM.ZERO;
        total.amount_added_groUSDT_e_v1_5 = NUM.ZERO;
        total.amount_added_groDAI_e_v1_6 = NUM.ZERO;
        total.amount_added_groUSDC_e_v1_6 = NUM.ZERO;
        total.amount_added_groUSDT_e_v1_6 = NUM.ZERO;
        total.amount_added_groDAI_e_v1_7 = NUM.ZERO;
        total.amount_added_groUSDC_e_v1_7 = NUM.ZERO;
        total.amount_added_groUSDT_e_v1_7 = NUM.ZERO;

        total.amount_removed_groDAI_e_v1_0 = NUM.ZERO;
        total.amount_removed_groUSDC_e_v1_0 = NUM.ZERO;
        total.amount_removed_groUSDT_e_v1_0 = NUM.ZERO;
        total.amount_removed_groDAI_e_v1_5 = NUM.ZERO;
        total.amount_removed_groUSDC_e_v1_5 = NUM.ZERO;
        total.amount_removed_groUSDT_e_v1_5 = NUM.ZERO;
        total.amount_removed_groDAI_e_v1_6 = NUM.ZERO;
        total.amount_removed_groUSDC_e_v1_6 = NUM.ZERO;
        total.amount_removed_groUSDT_e_v1_6 = NUM.ZERO;
        total.amount_removed_groDAI_e_v1_7 = NUM.ZERO;
        total.amount_removed_groUSDC_e_v1_7 = NUM.ZERO;
        total.amount_removed_groUSDT_e_v1_7 = NUM.ZERO;

        total.value_added_groDAI_e_v1_0 = NUM.ZERO;
        total.value_added_groUSDC_e_v1_0 = NUM.ZERO;
        total.value_added_groUSDT_e_v1_0 = NUM.ZERO;
        total.value_added_groDAI_e_v1_5 = NUM.ZERO;
        total.value_added_groUSDC_e_v1_5 = NUM.ZERO;
        total.value_added_groUSDT_e_v1_5 = NUM.ZERO;
        total.value_added_groDAI_e_v1_6 = NUM.ZERO;
        total.value_added_groUSDC_e_v1_6 = NUM.ZERO;
        total.value_added_groUSDT_e_v1_6 = NUM.ZERO;
        total.value_added_groDAI_e_v1_7 = NUM.ZERO;
        total.value_added_groUSDC_e_v1_7 = NUM.ZERO;
        total.value_added_groUSDT_e_v1_7 = NUM.ZERO;
        total.value_added_total = NUM.ZERO;

        total.value_removed_groDAI_e_v1_0 = NUM.ZERO;
        total.value_removed_groUSDC_e_v1_0 = NUM.ZERO;
        total.value_removed_groUSDT_e_v1_0 = NUM.ZERO;
        total.value_removed_groDAI_e_v1_5 = NUM.ZERO;
        total.value_removed_groUSDC_e_v1_5 = NUM.ZERO;
        total.value_removed_groUSDT_e_v1_5 = NUM.ZERO;
        total.value_removed_groDAI_e_v1_6 = NUM.ZERO;
        total.value_removed_groUSDC_e_v1_6 = NUM.ZERO;
        total.value_removed_groUSDT_e_v1_6 = NUM.ZERO;
        total.value_removed_groDAI_e_v1_7 = NUM.ZERO;
        total.value_removed_groUSDC_e_v1_7 = NUM.ZERO;
        total.value_removed_groUSDT_e_v1_7 = NUM.ZERO;
        total.value_removed_total = NUM.ZERO;

        total.net_value_groDAI_e_v1_0 = NUM.ZERO;
        total.net_value_groUSDC_e_v1_0 = NUM.ZERO;
        total.net_value_groUSDT_e_v1_0 = NUM.ZERO;
        total.net_value_groDAI_e_v1_5 = NUM.ZERO;
        total.net_value_groUSDC_e_v1_5 = NUM.ZERO;
        total.net_value_groUSDT_e_v1_5 = NUM.ZERO;
        total.net_value_groDAI_e_v1_6 = NUM.ZERO;
        total.net_value_groUSDC_e_v1_6 = NUM.ZERO;
        total.net_value_groUSDT_e_v1_6 = NUM.ZERO;
        total.net_value_groDAI_e_v1_7 = NUM.ZERO;
        total.net_value_groUSDC_e_v1_7 = NUM.ZERO;
        total.net_value_groUSDT_e_v1_7 = NUM.ZERO;
        total.net_value_total = NUM.ZERO;

        total.net_amount_groDAI_e_v1_0 = NUM.ZERO;
        total.net_amount_groUSDC_e_v1_0 = NUM.ZERO;
        total.net_amount_groUSDT_e_v1_0 = NUM.ZERO;
        total.net_amount_groDAI_e_v1_5 = NUM.ZERO;
        total.net_amount_groUSDC_e_v1_5 = NUM.ZERO;
        total.net_amount_groUSDT_e_v1_5 = NUM.ZERO;
        total.net_amount_groDAI_e_v1_6 = NUM.ZERO;
        total.net_amount_groUSDC_e_v1_6 = NUM.ZERO;
        total.net_amount_groUSDT_e_v1_6 = NUM.ZERO;
        total.net_amount_groDAI_e_v1_7 = NUM.ZERO;
        total.net_amount_groUSDC_e_v1_7 = NUM.ZERO;
        total.net_amount_groUSDT_e_v1_7 = NUM.ZERO;
    }
    return total;
}

export const setTotals = (
    type: string,
    coin: string,
    userAddress: Bytes,
    coinAmount: BigDecimal,
    usdAmount: BigDecimal,
): void => {

    let total = initTotals(userAddress);

    if (type === 'core_deposit' || type === 'transfer_in') {
        if (coin === 'groDAI_e_vault_v1_0') {
            // coin amount
            total.amount_added_groDAI_e_v1_0 = total.amount_added_groDAI_e_v1_0.plus(coinAmount);
            total.net_amount_groDAI_e_v1_0 = total.net_amount_groDAI_e_v1_0.plus(coinAmount);
            // usd value
            total.value_added_groDAI_e_v1_0 = total.value_added_groDAI_e_v1_0.plus(usdAmount);
            total.net_value_groDAI_e_v1_0 = total.net_value_groDAI_e_v1_0.plus(usdAmount);
        } else if (coin === 'groUSDC_e_vault_v1_0') {
            // coin amount
            total.amount_added_groUSDC_e_v1_0 = total.amount_added_groUSDC_e_v1_0.plus(coinAmount);
            total.net_amount_groUSDC_e_v1_0 = total.net_amount_groUSDC_e_v1_0.plus(coinAmount);
            // usd value
            total.value_added_groUSDC_e_v1_0 = total.value_added_groUSDC_e_v1_0.plus(usdAmount);
            total.net_value_groUSDC_e_v1_0 = total.net_value_groUSDC_e_v1_0.plus(usdAmount);
        } else if (coin === 'groUSDT_e_vault_v1_0') {
            // coin amount
            total.amount_added_groUSDT_e_v1_0 = total.amount_added_groUSDT_e_v1_0.plus(coinAmount);
            total.net_amount_groUSDT_e_v1_0 = total.net_amount_groUSDT_e_v1_0.plus(coinAmount);
            // usd value
            total.value_added_groUSDT_e_v1_0 = total.value_added_groUSDT_e_v1_0.plus(usdAmount);
            total.net_value_groUSDT_e_v1_0 = total.net_value_groUSDT_e_v1_0.plus(usdAmount);
        } else if (coin === 'groDAI_e_vault_v1_5') {
            // coin amount
            total.amount_added_groDAI_e_v1_5 = total.amount_added_groDAI_e_v1_5.plus(coinAmount);
            total.net_amount_groDAI_e_v1_5 = total.net_amount_groDAI_e_v1_5.plus(coinAmount);
            // usd value
            total.value_added_groDAI_e_v1_5 = total.value_added_groDAI_e_v1_5.plus(usdAmount);
            total.net_value_groDAI_e_v1_5 = total.net_value_groDAI_e_v1_5.plus(usdAmount);
        } else if (coin === 'groUSDC_e_vault_v1_5') {
            // coin amount
            total.amount_added_groUSDC_e_v1_5 = total.amount_added_groUSDC_e_v1_5.plus(coinAmount);
            total.net_amount_groUSDC_e_v1_5 = total.net_amount_groUSDC_e_v1_5.plus(coinAmount);
            // usd value
            total.value_added_groUSDC_e_v1_5 = total.value_added_groUSDC_e_v1_5.plus(usdAmount);
            total.net_value_groUSDC_e_v1_5 = total.net_value_groUSDC_e_v1_5.plus(usdAmount);
        } else if (coin === 'groUSDT_e_vault_v1_5') {
            // coin amount
            total.amount_added_groUSDT_e_v1_5 = total.amount_added_groUSDT_e_v1_5.plus(coinAmount);
            total.net_amount_groUSDT_e_v1_5 = total.net_amount_groUSDT_e_v1_5.plus(coinAmount);
            // usd value
            total.value_added_groUSDT_e_v1_5 = total.value_added_groUSDT_e_v1_5.plus(usdAmount);
            total.net_value_groUSDT_e_v1_5 = total.net_value_groUSDT_e_v1_5.plus(usdAmount);
        } else if (coin === 'groDAI_e_vault_v1_6') {
            // coin amount
            total.amount_added_groDAI_e_v1_6 = total.amount_added_groDAI_e_v1_6.plus(coinAmount);
            total.net_amount_groDAI_e_v1_6 = total.net_amount_groDAI_e_v1_6.plus(coinAmount);
            // usd value
            total.value_added_groDAI_e_v1_6 = total.value_added_groDAI_e_v1_6.plus(usdAmount);
            total.net_value_groDAI_e_v1_6 = total.net_value_groDAI_e_v1_6.plus(usdAmount);
        } else if (coin === 'groUSDC_e_vault_v1_6') {
            // coin amount
            total.amount_added_groUSDC_e_v1_6 = total.amount_added_groUSDC_e_v1_6.plus(coinAmount);
            total.net_amount_groUSDC_e_v1_6 = total.net_amount_groUSDC_e_v1_6.plus(coinAmount);
            // usd value
            total.value_added_groUSDC_e_v1_6 = total.value_added_groUSDC_e_v1_6.plus(usdAmount);
            total.net_value_groUSDC_e_v1_6 = total.net_value_groUSDC_e_v1_6.plus(usdAmount);
        } else if (coin === 'groUSDT_e_vault_v1_6') {
            // coin amount
            total.amount_added_groUSDT_e_v1_6 = total.amount_added_groUSDT_e_v1_6.plus(coinAmount);
            total.net_amount_groUSDT_e_v1_6 = total.net_amount_groUSDT_e_v1_6.plus(coinAmount);
            // usd value
            total.value_added_groUSDT_e_v1_6 = total.value_added_groUSDT_e_v1_6.plus(usdAmount);
            total.net_value_groUSDT_e_v1_6 = total.net_value_groUSDT_e_v1_6.plus(usdAmount);
        } else if (coin === 'groDAI_e_vault_v1_7') {
            // coin amount
            total.amount_added_groDAI_e_v1_7 = total.amount_added_groDAI_e_v1_7.plus(coinAmount);
            total.net_amount_groDAI_e_v1_7 = total.net_amount_groDAI_e_v1_7.plus(coinAmount);
            // usd value
            total.value_added_groDAI_e_v1_7 = total.value_added_groDAI_e_v1_7.plus(usdAmount);
            total.net_value_groDAI_e_v1_7 = total.net_value_groDAI_e_v1_7.plus(usdAmount);
        } else if (coin === 'groUSDC_e_vault_v1_7') {
            // coin amount
            total.amount_added_groUSDC_e_v1_7 = total.amount_added_groUSDC_e_v1_7.plus(coinAmount);
            total.net_amount_groUSDC_e_v1_7 = total.net_amount_groUSDC_e_v1_7.plus(coinAmount);
            // usd value
            total.value_added_groUSDC_e_v1_7 = total.value_added_groUSDC_e_v1_7.plus(usdAmount);
            total.net_value_groUSDC_e_v1_7 = total.net_value_groUSDC_e_v1_7.plus(usdAmount);
        } else if (coin === 'groUSDT_e_vault_v1_7') {
            // coin amount
            total.amount_added_groUSDT_e_v1_7 = total.amount_added_groUSDT_e_v1_7.plus(coinAmount);
            total.net_amount_groUSDT_e_v1_7 = total.net_amount_groUSDT_e_v1_7.plus(coinAmount);
            // usd value
            total.value_added_groUSDT_e_v1_7 = total.value_added_groUSDT_e_v1_7.plus(usdAmount);
            total.net_value_groUSDT_e_v1_7 = total.net_value_groUSDT_e_v1_7.plus(usdAmount);
        }
        total.value_added_total = total.value_added_total.plus(usdAmount);
        total.net_value_total = total.net_value_total.plus(usdAmount);

    } else if (type === 'core_withdrawal' || type === 'transfer_out') {

        if (coin === 'groDAI_e_vault_v1_0') {
            // coin amount
            total.amount_removed_groDAI_e_v1_0 = total.amount_removed_groDAI_e_v1_0.plus(coinAmount);
            total.net_amount_groDAI_e_v1_0 = total.net_amount_groDAI_e_v1_0.minus(coinAmount);
            // usd value
            total.value_removed_groDAI_e_v1_0 = total.value_removed_groDAI_e_v1_0.plus(usdAmount);
            total.net_value_groDAI_e_v1_0 = total.net_value_groDAI_e_v1_0.minus(usdAmount);
        } else if (coin === 'groUSDC_e_vault_v1_0') {
            // coin amount
            total.amount_removed_groUSDC_e_v1_0 = total.amount_removed_groUSDC_e_v1_0.plus(coinAmount);
            total.net_amount_groUSDC_e_v1_0 = total.net_amount_groUSDC_e_v1_0.minus(coinAmount);
            // usd value
            total.value_removed_groUSDC_e_v1_0 = total.value_removed_groUSDC_e_v1_0.plus(usdAmount);
            total.net_value_groUSDC_e_v1_0 = total.net_value_groUSDC_e_v1_0.minus(usdAmount);
        } else if (coin === 'groUSDT_e_vault_v1_0') {
            // coin amount
            total.amount_removed_groUSDT_e_v1_0 = total.amount_removed_groUSDT_e_v1_0.plus(coinAmount);
            total.net_amount_groUSDT_e_v1_0 = total.net_amount_groUSDT_e_v1_0.minus(coinAmount);
            // usd value
            total.value_removed_groUSDT_e_v1_0 = total.value_removed_groUSDT_e_v1_0.plus(usdAmount);
            total.net_value_groUSDT_e_v1_0 = total.net_value_groUSDT_e_v1_0.minus(usdAmount);
        } else if (coin === 'groDAI_e_vault_v1_5') {
            // coin amount
            total.amount_removed_groDAI_e_v1_5 = total.amount_removed_groDAI_e_v1_5.plus(coinAmount);
            total.net_amount_groDAI_e_v1_5 = total.net_amount_groDAI_e_v1_5.minus(coinAmount);
            // usd value
            total.value_removed_groDAI_e_v1_5 = total.value_removed_groDAI_e_v1_5.plus(usdAmount);
            total.net_value_groDAI_e_v1_5 = total.net_value_groDAI_e_v1_5.minus(usdAmount);
        } else if (coin === 'groUSDC_e_vault_v1_5') {
            // coin amount
            total.amount_removed_groUSDC_e_v1_5 = total.amount_removed_groUSDC_e_v1_5.plus(coinAmount);
            total.net_amount_groUSDC_e_v1_5 = total.net_amount_groUSDC_e_v1_5.minus(coinAmount);
            // usd value
            total.value_removed_groUSDC_e_v1_5 = total.value_removed_groUSDC_e_v1_5.plus(usdAmount);
            total.net_value_groUSDC_e_v1_5 = total.net_value_groUSDC_e_v1_5.minus(usdAmount);
        } else if (coin === 'groUSDT_e_vault_v1_5') {
            // coin amount
            total.amount_removed_groUSDT_e_v1_5 = total.amount_removed_groUSDT_e_v1_5.plus(coinAmount);
            total.net_amount_groUSDT_e_v1_5 = total.net_amount_groUSDT_e_v1_5.minus(coinAmount);
            // usd value
            total.value_removed_groUSDT_e_v1_5 = total.value_removed_groUSDT_e_v1_5.plus(usdAmount);
            total.net_value_groUSDT_e_v1_5 = total.net_value_groUSDT_e_v1_5.minus(usdAmount);
        } else if (coin === 'groDAI_e_vault_v1_6') {
            // coin amount
            total.amount_removed_groDAI_e_v1_6 = total.amount_removed_groDAI_e_v1_6.plus(coinAmount);
            total.net_amount_groDAI_e_v1_6 = total.net_amount_groDAI_e_v1_6.minus(coinAmount);
            // usd value
            total.value_removed_groDAI_e_v1_6 = total.value_removed_groDAI_e_v1_6.plus(usdAmount);
            total.net_value_groDAI_e_v1_6 = total.net_value_groDAI_e_v1_6.minus(usdAmount);
        } else if (coin === 'groUSDC_e_vault_v1_6') {
            // coin amount
            total.amount_removed_groUSDC_e_v1_6 = total.amount_removed_groUSDC_e_v1_6.plus(coinAmount);
            total.net_amount_groUSDC_e_v1_6 = total.net_amount_groUSDC_e_v1_6.minus(coinAmount);
            // usd value
            total.value_removed_groUSDC_e_v1_6 = total.value_removed_groUSDC_e_v1_6.plus(usdAmount);
            total.net_value_groUSDC_e_v1_6 = total.net_value_groUSDC_e_v1_6.minus(usdAmount);
        } else if (coin === 'groUSDT_e_vault_v1_6') {
            // coin amount
            total.amount_removed_groUSDT_e_v1_6 = total.amount_removed_groUSDT_e_v1_6.plus(coinAmount);
            total.net_amount_groUSDT_e_v1_6 = total.net_amount_groUSDT_e_v1_6.minus(coinAmount);
            // usd value
            total.value_removed_groUSDT_e_v1_6 = total.value_removed_groUSDT_e_v1_6.plus(usdAmount);
            total.net_value_groUSDT_e_v1_6 = total.net_value_groUSDT_e_v1_6.minus(usdAmount);
        } else if (coin === 'groDAI_e_vault_v1_7') {
            // coin amount
            total.amount_removed_groDAI_e_v1_7 = total.amount_removed_groDAI_e_v1_7.plus(coinAmount);
            total.net_amount_groDAI_e_v1_7 = total.net_amount_groDAI_e_v1_7.minus(coinAmount);
            // usd value
            total.value_removed_groDAI_e_v1_7 = total.value_removed_groDAI_e_v1_7.plus(usdAmount);
            total.net_value_groDAI_e_v1_7 = total.net_value_groDAI_e_v1_7.minus(usdAmount);
        } else if (coin === 'groUSDC_e_vault_v1_7') {
            // coin amount
            total.amount_removed_groUSDC_e_v1_7 = total.amount_removed_groUSDC_e_v1_7.plus(coinAmount);
            total.net_amount_groUSDC_e_v1_7 = total.net_amount_groUSDC_e_v1_7.minus(coinAmount);
            // usd value
            total.value_removed_groUSDC_e_v1_7 = total.value_removed_groUSDC_e_v1_7.plus(usdAmount);
            total.net_value_groUSDC_e_v1_7 = total.net_value_groUSDC_e_v1_7.minus(usdAmount);
        } else if (coin === 'groUSDT_e_vault_v1_7') {
            // coin amount
            total.amount_removed_groUSDT_e_v1_7 = total.amount_removed_groUSDT_e_v1_7.plus(coinAmount);
            total.net_amount_groUSDT_e_v1_7 = total.net_amount_groUSDT_e_v1_7.minus(coinAmount);
            // usd value
            total.value_removed_groUSDT_e_v1_7 = total.value_removed_groUSDT_e_v1_7.plus(usdAmount);
            total.net_value_groUSDT_e_v1_7 = total.net_value_groUSDT_e_v1_7.minus(usdAmount);
        }
        total.value_removed_total = total.value_removed_total.plus(usdAmount);
        total.net_value_total = total.net_value_total.minus(usdAmount);
    }

    total.save();
}
