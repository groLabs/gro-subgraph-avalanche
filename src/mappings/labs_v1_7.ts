// SPDX-License-Identifier: AGPLv3

//  ________  ________  ________
//  |\   ____\|\   __  \|\   __  \
//  \ \  \___|\ \  \|\  \ \  \|\  \
//   \ \  \  __\ \   _  _\ \  \\\  \
//    \ \  \|\  \ \  \\  \\ \  \\\  \
//     \ \_______\ \__\\ _\\ \_______\
//      \|_______|\|__|\|__|\|_______|

// gro protocol - avalanche subgraph: https://github.com/groLabs/gro-subgraph-avalanche

/// @notice Handles approvals, deposits, withdrawals, transfers & harvests from Vaults v1.7
/// @dev One vault per gro stablecoin (groDAI, groUSDC, groUSDT)
///     - Vault DAI v1.6: 0x6063597b9356b246e706fd6a48c780f897e3ef55
///     - Vault USDC v1.6: 0x2eb05cffa24309b9aaf300392a4d8db745d4e592
///     - Vault USDT v1.6: 0x6ef44077a1f5e10cdfccc30efb7dcdb1d5475581

import {
    DECIMALS,
    TOKEN as Token,
} from '../utils/constants';
import { tokenToDecimal } from '../utils/tokens';
import { setDepositLimit } from '../setters/strats';
import {
    Approval as ApprovalDai,
    Transfer as TransferDai,
} from '../../generated/avaxdaivault_v1_7/ERC20';
import {
    Approval as ApprovalUsdc,
    Transfer as TransferUsdc,
} from '../../generated/avaxusdcvault_v1_7/ERC20';
import {
    Approval as ApprovalUsdt,
    Transfer as TransferUsdt,
} from '../../generated/avaxusdtvault_v1_7/ERC20';
import {
    LogDeposit as LogDepositDai,
    LogWithdrawal as LogWithdrawalDai,
    LogDepositLimit as LogDepositLimitDai,
    LogStrategyReported as LogStrategyReportedDai,
    LogNewStrategyHarvest as LogNewStrategyHarvestDai,
} from '../../generated/avaxdaivault_v1_7/VaultAdaptorMK2_v1_7';
import {
    LogDeposit as LogDepositUsdc,
    LogWithdrawal as LogWithdrawalUsdc,
    LogDepositLimit as LogDepositLimitUsdc,
    LogStrategyReported as LogStrategyReportedUsdc,
    LogNewStrategyHarvest as LogNewStrategyHarvestUsdc,
} from '../../generated/avaxusdcvault_v1_7/VaultAdaptorMK2_v1_7';
import {
    LogDeposit as LogDepositUsdt,
    LogWithdrawal as LogWithdrawalUsdt,
    LogDepositLimit as LogDepositLimitUsdt,
    LogStrategyReported as LogStrategyReportedUsdt,
    LogNewStrategyHarvest as LogNewStrategyHarvestUsdt,
} from '../../generated/avaxusdtvault_v1_7/VaultAdaptorMK2_v1_7';
import {
    vaultDai_1_7_Address,
    vaultUsdc_1_7_Address,
    vaultUsdt_1_7_Address,
    stratDai_1_7_Address,
    stratUsdc_1_7_Address,
    stratUsdt_1_7_Address,
} from '../utils/contracts';
import {
    handleDeposit,
    handleTransfer,
    handleApproval,
    handleWithdrawal,
    handleStrategyReported,
} from './labs_global_handlers';


/// @notice Handles <Transfer> events from Vaults v1.7
/// @param ev the transfer event
export function handleTransferDAI(ev: TransferDai): void {
    handleTransfer(ev, Token.GRO_DAI_E_VAULT_V1_7);
}
export function handleTransferUSDC(ev: TransferUsdc): void {
    handleTransfer(ev, Token.GRO_USDC_E_VAULT_V1_7);
}
export function handleTransferUSDT(ev: TransferUsdt): void {
    handleTransfer(ev, Token.GRO_USDT_E_VAULT_V1_7);
}

/// @notice Handles <Approal> events from Vaults v1.7
/// @param ev the approval event
export function handleApprovalDAI(ev: ApprovalDai): void {
    handleApproval(ev, Token.GRO_DAI_E_VAULT_V1_7);
}
export function handleApprovalUSDC(ev: ApprovalUsdc): void {
    handleApproval(ev, Token.GRO_USDC_E_VAULT_V1_7);
}
export function handleApprovalUSDT(ev: ApprovalUsdt): void {
    handleApproval(ev, Token.GRO_USDT_E_VAULT_V1_7);
}

/// @notice Handles <LogDeposit> events from Vaults v1.7
/// @param ev the deposit event
export function handleDepositDAI(ev: LogDepositDai): void {
    handleDeposit(ev, Token.GRO_DAI_E_VAULT_V1_7);
}
export function handleDepositUSDC(ev: LogDepositUsdc): void {
    handleDeposit(ev, Token.GRO_USDC_E_VAULT_V1_7);
}
export function handleDepositUSDT(ev: LogDepositUsdt): void {
    handleDeposit(ev, Token.GRO_USDT_E_VAULT_V1_7);
}

/// @notice Handles <LogWithdrawal> events from Vaults v1.7
/// @param ev the withdrawal event
export function handleWithdrawalDAI(ev: LogWithdrawalDai): void {
    handleWithdrawal(
        ev,
        Token.GRO_DAI_E_VAULT_V1_7,
        stratDai_1_7_Address,
        vaultDai_1_7_Address,
    );
}
export function handleWithdrawalUSDC(ev: LogWithdrawalUsdc): void {
    handleWithdrawal(
        ev,
        Token.GRO_USDC_E_VAULT_V1_7,
        stratUsdc_1_7_Address,
        vaultUsdc_1_7_Address,
    );
}
export function handleWithdrawalUSDT(ev: LogWithdrawalUsdt): void {
    handleWithdrawal(
        ev,
        Token.GRO_USDT_E_VAULT_V1_7,
        stratUsdt_1_7_Address,
        vaultUsdt_1_7_Address,
    );
}

/// @notice Handles <LogStrategyReported> events from Vaults v1.7
/// @param ev the strategy reported event
export function handleStrategyReportedDAI(event: LogStrategyReportedDai): void {
    handleStrategyReported(
        Token.GRO_DAI_E_VAULT_V1_7,
        stratDai_1_7_Address,
        vaultDai_1_7_Address,
    );
}
export function handleStrategyReportedUSDC(event: LogStrategyReportedUsdc): void {
    handleStrategyReported(
        Token.GRO_USDC_E_VAULT_V1_7,
        stratUsdc_1_7_Address,
        vaultUsdc_1_7_Address,
    );
}
export function handleStrategyReportedUSDT(event: LogStrategyReportedUsdt): void {
    handleStrategyReported(
        Token.GRO_USDT_E_VAULT_V1_7,
        stratUsdt_1_7_Address,
        vaultUsdt_1_7_Address,
    );
}

/// @notice Handles <LogNewStrategyHarvest> events from Vaults v1.7
/// @dev No event data is needed; used to update total assets through contract calls
export function handleNewStrategyHarvestDAI(_: LogNewStrategyHarvestDai): void {
    handleStrategyReported(
        Token.GRO_DAI_E_VAULT_V1_7,
        stratDai_1_7_Address,
        vaultDai_1_7_Address,
    );
}
export function handleNewStrategyHarvestUSDC(_: LogNewStrategyHarvestUsdc): void {
    handleStrategyReported(
        Token.GRO_USDC_E_VAULT_V1_7,
        stratUsdc_1_7_Address,
        vaultUsdc_1_7_Address,
    );
}
export function handleNewStrategyHarvestUSDT(_: LogNewStrategyHarvestUsdt): void {
    handleStrategyReported(
        Token.GRO_USDT_E_VAULT_V1_7,
        stratUsdt_1_7_Address,
        vaultUsdt_1_7_Address,
    );
}

/// @notice Handles <LogDepositLimit> events from Vaults v1.7
/// @param ev the deposit limit event
export function handleDepositLimitDAI(event: LogDepositLimitDai): void {
    setDepositLimit(
        stratDai_1_7_Address,
        tokenToDecimal(event.params.newLimit, 18, DECIMALS),
    );
}
export function handleDepositLimitUSDC(event: LogDepositLimitUsdc): void {
    setDepositLimit(
        stratUsdc_1_7_Address,
        tokenToDecimal(event.params.newLimit, 6, DECIMALS),
    );
}
export function handleDepositLimitUSDT(event: LogDepositLimitUsdt): void {
    setDepositLimit(
        stratUsdt_1_7_Address,
        tokenToDecimal(event.params.newLimit, 6, DECIMALS),
    );
}
