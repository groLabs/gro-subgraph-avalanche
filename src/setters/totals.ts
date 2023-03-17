// SPDX-License-Identifier: AGPLv3

//  ________  ________  ________
//  |\   ____\|\   __  \|\   __  \
//  \ \  \___|\ \  \|\  \ \  \|\  \
//   \ \  \  __\ \   _  _\ \  \\\  \
//    \ \  \|\  \ \  \\  \\ \  \\\  \
//     \ \_______\ \__\\ _\\ \_______\
//      \|_______|\|__|\|__|\|_______|

// gro protocol - avalanche subgraph: https://github.com/groLabs/gro-subgraph-avalanche

/// @notice
///     - Initialises entity <Totals> and updates their amount and value fields
///     - This entity is used to provide aggregated personal stats to the front-end

import { Totals } from '../../generated/schema';
import {
    NUM,
    TOKEN as Token,
    TX_TYPE as TxType,
} from '../utils/constants';
import {
    Bytes,
    BigDecimal,
} from '@graphprotocol/graph-ts';


/// @notice Initialises entity <Totals> with default 0 values
/// @param userAddress the user address
/// @dev total object created or loaded
const initTotals = (userAddress: Bytes): Totals => {
    let total = Totals.load(userAddress);
    if (!total) {
        total = new Totals(userAddress);
        total.user_address = userAddress;
        // amount added
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
        // amount removed
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
        // value added
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
        // value removed
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
        // net value
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
        // net amount
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

/// @notice Updates the gro token amounts and values in entity <Totals>
/// @dev Triggered by <LogDeposit>, <LogWithdrawal> & <Transfer> events
///      from Vault contracts
/// @param type the transaction type (core_deposit, core_withdrawal,
///             transfer_in & transfer_out)
/// @param coin the coin type
/// @param userAddress the user address
/// @param coinAmount the coin amount
/// @param usdAmount the coin value (in USD)
export const setTotals = (
    type: string,
    coin: string,
    userAddress: Bytes,
    coinAmount: BigDecimal,
    usdAmount: BigDecimal,
): void => {
    let total = initTotals(userAddress);
    if (
        type === TxType.CORE_DEPOSIT
        || type === TxType.TRANSFER_IN
    ) {
        if (coin === Token.GRO_DAI_E_VAULT_V1_0) {
            // coin amount
            total.amount_added_groDAI_e_v1_0 = total.amount_added_groDAI_e_v1_0.plus(coinAmount);
            total.net_amount_groDAI_e_v1_0 = total.net_amount_groDAI_e_v1_0.plus(coinAmount);
            // usd value
            total.value_added_groDAI_e_v1_0 = total.value_added_groDAI_e_v1_0.plus(usdAmount);
            total.net_value_groDAI_e_v1_0 = total.net_value_groDAI_e_v1_0.plus(usdAmount);
        } else if (coin === Token.GRO_USDC_E_VAULT_V1_0) {
            // coin amount
            total.amount_added_groUSDC_e_v1_0 = total.amount_added_groUSDC_e_v1_0.plus(coinAmount);
            total.net_amount_groUSDC_e_v1_0 = total.net_amount_groUSDC_e_v1_0.plus(coinAmount);
            // usd value
            total.value_added_groUSDC_e_v1_0 = total.value_added_groUSDC_e_v1_0.plus(usdAmount);
            total.net_value_groUSDC_e_v1_0 = total.net_value_groUSDC_e_v1_0.plus(usdAmount);
        } else if (coin === Token.GRO_USDT_E_VAULT_V1_0) {
            // coin amount
            total.amount_added_groUSDT_e_v1_0 = total.amount_added_groUSDT_e_v1_0.plus(coinAmount);
            total.net_amount_groUSDT_e_v1_0 = total.net_amount_groUSDT_e_v1_0.plus(coinAmount);
            // usd value
            total.value_added_groUSDT_e_v1_0 = total.value_added_groUSDT_e_v1_0.plus(usdAmount);
            total.net_value_groUSDT_e_v1_0 = total.net_value_groUSDT_e_v1_0.plus(usdAmount);
        } else if (coin === Token.GRO_DAI_E_VAULT_V1_5) {
            // coin amount
            total.amount_added_groDAI_e_v1_5 = total.amount_added_groDAI_e_v1_5.plus(coinAmount);
            total.net_amount_groDAI_e_v1_5 = total.net_amount_groDAI_e_v1_5.plus(coinAmount);
            // usd value
            total.value_added_groDAI_e_v1_5 = total.value_added_groDAI_e_v1_5.plus(usdAmount);
            total.net_value_groDAI_e_v1_5 = total.net_value_groDAI_e_v1_5.plus(usdAmount);
        } else if (coin === Token.GRO_USDC_E_VAULT_V1_5) {
            // coin amount
            total.amount_added_groUSDC_e_v1_5 = total.amount_added_groUSDC_e_v1_5.plus(coinAmount);
            total.net_amount_groUSDC_e_v1_5 = total.net_amount_groUSDC_e_v1_5.plus(coinAmount);
            // usd value
            total.value_added_groUSDC_e_v1_5 = total.value_added_groUSDC_e_v1_5.plus(usdAmount);
            total.net_value_groUSDC_e_v1_5 = total.net_value_groUSDC_e_v1_5.plus(usdAmount);
        } else if (coin === Token.GRO_USDT_E_VAULT_V1_5) {
            // coin amount
            total.amount_added_groUSDT_e_v1_5 = total.amount_added_groUSDT_e_v1_5.plus(coinAmount);
            total.net_amount_groUSDT_e_v1_5 = total.net_amount_groUSDT_e_v1_5.plus(coinAmount);
            // usd value
            total.value_added_groUSDT_e_v1_5 = total.value_added_groUSDT_e_v1_5.plus(usdAmount);
            total.net_value_groUSDT_e_v1_5 = total.net_value_groUSDT_e_v1_5.plus(usdAmount);
        } else if (coin === Token.GRO_DAI_E_VAULT_V1_6) {
            // coin amount
            total.amount_added_groDAI_e_v1_6 = total.amount_added_groDAI_e_v1_6.plus(coinAmount);
            total.net_amount_groDAI_e_v1_6 = total.net_amount_groDAI_e_v1_6.plus(coinAmount);
            // usd value
            total.value_added_groDAI_e_v1_6 = total.value_added_groDAI_e_v1_6.plus(usdAmount);
            total.net_value_groDAI_e_v1_6 = total.net_value_groDAI_e_v1_6.plus(usdAmount);
        } else if (coin === Token.GRO_USDC_E_VAULT_V1_6) {
            // coin amount
            total.amount_added_groUSDC_e_v1_6 = total.amount_added_groUSDC_e_v1_6.plus(coinAmount);
            total.net_amount_groUSDC_e_v1_6 = total.net_amount_groUSDC_e_v1_6.plus(coinAmount);
            // usd value
            total.value_added_groUSDC_e_v1_6 = total.value_added_groUSDC_e_v1_6.plus(usdAmount);
            total.net_value_groUSDC_e_v1_6 = total.net_value_groUSDC_e_v1_6.plus(usdAmount);
        } else if (coin === Token.GRO_USDT_E_VAULT_V1_6) {
            // coin amount
            total.amount_added_groUSDT_e_v1_6 = total.amount_added_groUSDT_e_v1_6.plus(coinAmount);
            total.net_amount_groUSDT_e_v1_6 = total.net_amount_groUSDT_e_v1_6.plus(coinAmount);
            // usd value
            total.value_added_groUSDT_e_v1_6 = total.value_added_groUSDT_e_v1_6.plus(usdAmount);
            total.net_value_groUSDT_e_v1_6 = total.net_value_groUSDT_e_v1_6.plus(usdAmount);
        } else if (coin === Token.GRO_DAI_E_VAULT_V1_7) {
            // coin amount
            total.amount_added_groDAI_e_v1_7 = total.amount_added_groDAI_e_v1_7.plus(coinAmount);
            total.net_amount_groDAI_e_v1_7 = total.net_amount_groDAI_e_v1_7.plus(coinAmount);
            // usd value
            total.value_added_groDAI_e_v1_7 = total.value_added_groDAI_e_v1_7.plus(usdAmount);
            total.net_value_groDAI_e_v1_7 = total.net_value_groDAI_e_v1_7.plus(usdAmount);
        } else if (coin === Token.GRO_USDC_E_VAULT_V1_7) {
            // coin amount
            total.amount_added_groUSDC_e_v1_7 = total.amount_added_groUSDC_e_v1_7.plus(coinAmount);
            total.net_amount_groUSDC_e_v1_7 = total.net_amount_groUSDC_e_v1_7.plus(coinAmount);
            // usd value
            total.value_added_groUSDC_e_v1_7 = total.value_added_groUSDC_e_v1_7.plus(usdAmount);
            total.net_value_groUSDC_e_v1_7 = total.net_value_groUSDC_e_v1_7.plus(usdAmount);
        } else if (coin === Token.GRO_USDT_E_VAULT_V1_7) {
            // coin amount
            total.amount_added_groUSDT_e_v1_7 = total.amount_added_groUSDT_e_v1_7.plus(coinAmount);
            total.net_amount_groUSDT_e_v1_7 = total.net_amount_groUSDT_e_v1_7.plus(coinAmount);
            // usd value
            total.value_added_groUSDT_e_v1_7 = total.value_added_groUSDT_e_v1_7.plus(usdAmount);
            total.net_value_groUSDT_e_v1_7 = total.net_value_groUSDT_e_v1_7.plus(usdAmount);
        }
        total.value_added_total = total.value_added_total.plus(usdAmount);
        total.net_value_total = total.net_value_total.plus(usdAmount);
    } else if (
        type === TxType.CORE_WITHDRAWAL
        || type === TxType.TRANSFER_OUT
    ) {
        if (coin === Token.GRO_DAI_E_VAULT_V1_0) {
            // coin amount
            total.amount_removed_groDAI_e_v1_0 = total.amount_removed_groDAI_e_v1_0.plus(coinAmount);
            total.net_amount_groDAI_e_v1_0 = total.net_amount_groDAI_e_v1_0.minus(coinAmount);
            // usd value
            total.value_removed_groDAI_e_v1_0 = total.value_removed_groDAI_e_v1_0.plus(usdAmount);
            total.net_value_groDAI_e_v1_0 = total.net_value_groDAI_e_v1_0.minus(usdAmount);
        } else if (coin === Token.GRO_USDC_E_VAULT_V1_0) {
            // coin amount
            total.amount_removed_groUSDC_e_v1_0 = total.amount_removed_groUSDC_e_v1_0.plus(coinAmount);
            total.net_amount_groUSDC_e_v1_0 = total.net_amount_groUSDC_e_v1_0.minus(coinAmount);
            // usd value
            total.value_removed_groUSDC_e_v1_0 = total.value_removed_groUSDC_e_v1_0.plus(usdAmount);
            total.net_value_groUSDC_e_v1_0 = total.net_value_groUSDC_e_v1_0.minus(usdAmount);
        } else if (coin === Token.GRO_USDT_E_VAULT_V1_0) {
            // coin amount
            total.amount_removed_groUSDT_e_v1_0 = total.amount_removed_groUSDT_e_v1_0.plus(coinAmount);
            total.net_amount_groUSDT_e_v1_0 = total.net_amount_groUSDT_e_v1_0.minus(coinAmount);
            // usd value
            total.value_removed_groUSDT_e_v1_0 = total.value_removed_groUSDT_e_v1_0.plus(usdAmount);
            total.net_value_groUSDT_e_v1_0 = total.net_value_groUSDT_e_v1_0.minus(usdAmount);
        } else if (coin === Token.GRO_DAI_E_VAULT_V1_5) {
            // coin amount
            total.amount_removed_groDAI_e_v1_5 = total.amount_removed_groDAI_e_v1_5.plus(coinAmount);
            total.net_amount_groDAI_e_v1_5 = total.net_amount_groDAI_e_v1_5.minus(coinAmount);
            // usd value
            total.value_removed_groDAI_e_v1_5 = total.value_removed_groDAI_e_v1_5.plus(usdAmount);
            total.net_value_groDAI_e_v1_5 = total.net_value_groDAI_e_v1_5.minus(usdAmount);
        } else if (coin === Token.GRO_USDC_E_VAULT_V1_5) {
            // coin amount
            total.amount_removed_groUSDC_e_v1_5 = total.amount_removed_groUSDC_e_v1_5.plus(coinAmount);
            total.net_amount_groUSDC_e_v1_5 = total.net_amount_groUSDC_e_v1_5.minus(coinAmount);
            // usd value
            total.value_removed_groUSDC_e_v1_5 = total.value_removed_groUSDC_e_v1_5.plus(usdAmount);
            total.net_value_groUSDC_e_v1_5 = total.net_value_groUSDC_e_v1_5.minus(usdAmount);
        } else if (coin === Token.GRO_USDT_E_VAULT_V1_5) {
            // coin amount
            total.amount_removed_groUSDT_e_v1_5 = total.amount_removed_groUSDT_e_v1_5.plus(coinAmount);
            total.net_amount_groUSDT_e_v1_5 = total.net_amount_groUSDT_e_v1_5.minus(coinAmount);
            // usd value
            total.value_removed_groUSDT_e_v1_5 = total.value_removed_groUSDT_e_v1_5.plus(usdAmount);
            total.net_value_groUSDT_e_v1_5 = total.net_value_groUSDT_e_v1_5.minus(usdAmount);
        } else if (coin === Token.GRO_DAI_E_VAULT_V1_6) {
            // coin amount
            total.amount_removed_groDAI_e_v1_6 = total.amount_removed_groDAI_e_v1_6.plus(coinAmount);
            total.net_amount_groDAI_e_v1_6 = total.net_amount_groDAI_e_v1_6.minus(coinAmount);
            // usd value
            total.value_removed_groDAI_e_v1_6 = total.value_removed_groDAI_e_v1_6.plus(usdAmount);
            total.net_value_groDAI_e_v1_6 = total.net_value_groDAI_e_v1_6.minus(usdAmount);
        } else if (coin === Token.GRO_USDC_E_VAULT_V1_6) {
            // coin amount
            total.amount_removed_groUSDC_e_v1_6 = total.amount_removed_groUSDC_e_v1_6.plus(coinAmount);
            total.net_amount_groUSDC_e_v1_6 = total.net_amount_groUSDC_e_v1_6.minus(coinAmount);
            // usd value
            total.value_removed_groUSDC_e_v1_6 = total.value_removed_groUSDC_e_v1_6.plus(usdAmount);
            total.net_value_groUSDC_e_v1_6 = total.net_value_groUSDC_e_v1_6.minus(usdAmount);
        } else if (coin === Token.GRO_USDT_E_VAULT_V1_6) {
            // coin amount
            total.amount_removed_groUSDT_e_v1_6 = total.amount_removed_groUSDT_e_v1_6.plus(coinAmount);
            total.net_amount_groUSDT_e_v1_6 = total.net_amount_groUSDT_e_v1_6.minus(coinAmount);
            // usd value
            total.value_removed_groUSDT_e_v1_6 = total.value_removed_groUSDT_e_v1_6.plus(usdAmount);
            total.net_value_groUSDT_e_v1_6 = total.net_value_groUSDT_e_v1_6.minus(usdAmount);
        } else if (coin === Token.GRO_DAI_E_VAULT_V1_7) {
            // coin amount
            total.amount_removed_groDAI_e_v1_7 = total.amount_removed_groDAI_e_v1_7.plus(coinAmount);
            total.net_amount_groDAI_e_v1_7 = total.net_amount_groDAI_e_v1_7.minus(coinAmount);
            // usd value
            total.value_removed_groDAI_e_v1_7 = total.value_removed_groDAI_e_v1_7.plus(usdAmount);
            total.net_value_groDAI_e_v1_7 = total.net_value_groDAI_e_v1_7.minus(usdAmount);
        } else if (coin === Token.GRO_USDC_E_VAULT_V1_7) {
            // coin amount
            total.amount_removed_groUSDC_e_v1_7 = total.amount_removed_groUSDC_e_v1_7.plus(coinAmount);
            total.net_amount_groUSDC_e_v1_7 = total.net_amount_groUSDC_e_v1_7.minus(coinAmount);
            // usd value
            total.value_removed_groUSDC_e_v1_7 = total.value_removed_groUSDC_e_v1_7.plus(usdAmount);
            total.net_value_groUSDC_e_v1_7 = total.net_value_groUSDC_e_v1_7.minus(usdAmount);
        } else if (coin === Token.GRO_USDT_E_VAULT_V1_7) {
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
