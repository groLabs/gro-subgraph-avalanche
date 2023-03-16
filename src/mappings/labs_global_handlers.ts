// SPDX-License-Identifier: AGPLv3

//  ________  ________  ________
//  |\   ____\|\   __  \|\   __  \
//  \ \  \___|\ \  \|\  \ \  \|\  \
//   \ \  \  __\ \   _  _\ \  \\\  \
//    \ \  \|\  \ \  \\  \\ \  \\\  \
//     \ \_______\ \__\\ _\\ \_______\
//      \|_______|\|__|\|__|\|_______|

// gro protocol - avalanche subgraph: https://github.com/groLabs/gro-subgraph-avalanche

/// @notice Global handler for approvals, deposits, withdrawals, transfers & harvests
/// @dev Using T functions to handle different vault versions with same data structure

// @ts-nocheck
import { setStrategy } from '../setters/strats';
import { Address } from '@graphprotocol/graph-ts';
import { setLatestPrice } from '../setters/price';
import { manageDeposit } from '../managers/deposits';
import { manageTransfer } from '../managers/transfers';
import { manageApproval } from '../managers/approvals';
import { manageWithdrawal } from '../managers/withdrawals';
import { parseDepositEvent } from '../parsers/deposit';
import { parseTransferEvent } from '../parsers/transfer';
import { parseApprovalEvent } from '../parsers/approval';
import { parseWithdrawalEvent } from '../parsers/withdrawal';
import { isDepositOrWithdrawal } from '../utils/contracts';


// Global Strategy Reported handler
export function handleStrategyReported(
    token: string,
    stratAddr: Address,
    vaultAddr: Address
): void {
    const base = token.includes('DAI')
        ? 18
        : 6;
    setLatestPrice(token);
    setStrategy(
        stratAddr,
        vaultAddr,
        base,
    );
}

// Global Approval handler
export function handleApproval<T>(evAp: T, token: string): void {
    const ev = parseApprovalEvent(evAp);
    manageApproval(ev, token);
}

// Global Deposit handlers
export function handleDeposit<T>(evDep: T, token: string): void {
    setLatestPrice(token);
    const ev = parseDepositEvent(evDep);
    manageDeposit(ev, token);
}

// Global Transfer handler
export function handleTransfer<T>(evTr: T, token: string): void {
    if (!isDepositOrWithdrawal(
        evTr.params.from, evTr.params.to, evTr.address)) {
        const ev = parseTransferEvent(evTr);
        manageTransfer(ev, token);
    }
}

// Global Withdrawal handlers
export function handleWithdrawal<T>(
    evWit: T,
    token: string,
    stratAddr: Address,
    vaultAddr: Address
): void {
    setLatestPrice(token);
    const ev = parseWithdrawalEvent(evWit);
    manageWithdrawal(ev, token);
    const base = token.includes('DAI')
        ? 18
        : 6;
    setStrategy(
        stratAddr,
        vaultAddr,
        base,
    );
}
