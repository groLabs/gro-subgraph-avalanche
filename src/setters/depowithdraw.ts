// SPDX-License-Identifier: AGPLv3

//  ________  ________  ________
//  |\   ____\|\   __  \|\   __  \
//  \ \  \___|\ \  \|\  \ \  \|\  \
//   \ \  \  __\ \   _  _\ \  \\\  \
//    \ \  \|\  \ \  \\  \\ \  \\\  \
//     \ \_______\ \__\\ _\\ \_______\
//      \|_______|\|__|\|__|\|_______|

// gro protocol - avalanche subgraph: https://github.com/groLabs/gro-subgraph-avalanche

/// @notice Stores deposits & withdrawals into entity <TransferTx>

import { DECIMALS } from '../utils/constants';
import { TransferTx } from '../../generated/schema';
import { DepoWithdraw } from '../types/depowithdraw';
import {
    tokenToDecimal,
    getPricePerShare,
} from '../utils/tokens';


/// @notice Stores core deposits & withdrawals into entity <TransferTx>
/// @dev Triggered by <LogDeposit> & <LogWithdrawal> from Vaults
/// @param ev the parsed event
/// @param token the token
/// @return deposit or withdrawal object created
export const setDepoWithdrawTx = (
    ev: DepoWithdraw,
    token: string,
): TransferTx => {
    let tx = new TransferTx(ev.id);
    const base = token.includes('DAI')
        ? 18
        : 6;
    const coinAmount = tokenToDecimal(ev.coinAmount, base, DECIMALS);
    const usdAmount = tokenToDecimal(ev.usdAmount, base, DECIMALS);
    const pricePerShare = getPricePerShare(token);
    tx.contract_address = ev.contractAddress;
    tx.block_number = ev.block;
    tx.block_timestamp = ev.timestamp;
    tx.token = token;
    tx.type = ev.type;
    tx.hash = ev.hash;
    tx.user_address = ev.userAddress;
    tx.from_address = ev.fromAddress;
    tx.to_address = ev.toAddress;
    tx.coin_amount = coinAmount;
    tx.usd_amount = usdAmount;
    tx.current_price_per_share = pricePerShare[0].truncate(DECIMALS);
    tx.estimated_price_per_share = pricePerShare[1].truncate(DECIMALS);
    tx.save();
    return tx;
}
