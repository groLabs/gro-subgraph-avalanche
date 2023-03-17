// SPDX-License-Identifier: AGPLv3

//  ________  ________  ________
//  |\   ____\|\   __  \|\   __  \
//  \ \  \___|\ \  \|\  \ \  \|\  \
//   \ \  \  __\ \   _  _\ \  \\\  \
//    \ \  \|\  \ \  \\  \\ \  \\\  \
//     \ \_______\ \__\\ _\\ \_______\
//      \|_______|\|__|\|__|\|_______|

// gro protocol - avalanche subgraph: https://github.com/groLabs/gro-subgraph-avalanche

/// @notice Handles approvals, deposits, withdrawals, transfers & harvests from Vaults v1.6
/// @dev One vault per gro stablecoin (groDAI, groUSDC, groUSDT)
///     - Vault DAI v1.6: 0xbed10235a181020f2b3a974c5c9c5454b7414635
///     - Vault USDC v1.6: 0x72681d8dfce95b275fd5d2bfba199f78c9b0d7ba
///     - Vault USDT v1.6: 0xad6c0751e4fcdca0926174248f67184880a1dbbd

import { tokenToDecimal } from '../utils/tokens';
import { setDepositLimit } from '../setters/strats';
import {
    DECIMALS,
    TOKEN as Token,
} from '../utils/constants';
import {
    Approval as ApprovalDai,
    Transfer as TransferDai,
} from '../../generated/avaxdaivault_v1_6/ERC20';
import {
    Approval as ApprovalUsdc,
    Transfer as TransferUsdc,
} from '../../generated/avaxusdcvault_v1_6/ERC20';
import {
    Approval as ApprovalUsdt,
    Transfer as TransferUsdt,
} from '../../generated/avaxusdtvault_v1_6/ERC20';
import {
    LogDeposit as LogDepositDai,
    LogWithdrawal as LogWithdrawalDai,
    LogDepositLimit as LogDepositLimitDai,
    LogStrategyReported as LogStrategyReportedDai,
    LogNewStrategyHarvest as LogNewStrategyHarvestDai,
} from '../../generated/avaxdaivault_v1_6/VaultAdaptorMK2_v1_6';
import {
    LogDeposit as LogDepositUsdc,
    LogWithdrawal as LogWithdrawalUsdc,
    LogDepositLimit as LogDepositLimitUsdc,
    LogStrategyReported as LogStrategyReportedUsdc,
    LogNewStrategyHarvest as LogNewStrategyHarvestUsdc,
} from '../../generated/avaxusdcvault_v1_6/VaultAdaptorMK2_v1_6';
import {
    LogDeposit as LogDepositUsdt,
    LogWithdrawal as LogWithdrawalUsdt,
    LogDepositLimit as LogDepositLimitUsdt,
    LogStrategyReported as LogStrategyReportedUsdt,
    LogNewStrategyHarvest as LogNewStrategyHarvestUsdt,
} from '../../generated/avaxusdtvault_v1_6/VaultAdaptorMK2_v1_6';
import {
    vaultDai_1_6_Address,
    vaultUsdc_1_6_Address,
    vaultUsdt_1_6_Address,
    stratDai_1_6_Address,
    stratUsdc_1_6_Address,
    stratUsdt_1_6_Address,
} from '../utils/contracts';
import {
    handleDeposit,
    handleTransfer,
    handleApproval,
    handleWithdrawal,
    handleStrategyReported,
} from './labs_global_handlers';


/// @notice Handles <Transfer> events from Vaults v1.6
/// @param ev the transfer event
export function handleTransferDAI(ev: TransferDai): void {
    handleTransfer(ev, Token.GRO_DAI_E_VAULT_V1_6);
}
export function handleTransferUSDC(ev: TransferUsdc): void {
    handleTransfer(ev, Token.GRO_USDC_E_VAULT_V1_6);
}
export function handleTransferUSDT(ev: TransferUsdt): void {
    handleTransfer(ev, Token.GRO_USDT_E_VAULT_V1_6);
}

/// @notice Handles <Approal> events from Vaults v1.6
/// @param ev the approval event
export function handleApprovalDAI(ev: ApprovalDai): void {
    handleApproval(ev, Token.GRO_DAI_E_VAULT_V1_6);
}
export function handleApprovalUSDC(ev: ApprovalUsdc): void {
    handleApproval(ev, Token.GRO_USDC_E_VAULT_V1_6);
}
export function handleApprovalUSDT(ev: ApprovalUsdt): void {
    handleApproval(ev, Token.GRO_USDT_E_VAULT_V1_6);
}

/// @notice Handles <LogDeposit> events from Vaults v1.6
/// @param ev the deposit event
export function handleDepositDAI(ev: LogDepositDai): void {
    handleDeposit(ev, Token.GRO_DAI_E_VAULT_V1_6);
}
export function handleDepositUSDC(ev: LogDepositUsdc): void {
    handleDeposit(ev, Token.GRO_USDC_E_VAULT_V1_6);
}
export function handleDepositUSDT(ev: LogDepositUsdt): void {
    handleDeposit(ev, Token.GRO_USDT_E_VAULT_V1_6);
}

/// @notice Handles <LogWithdrawal> events from Vaults v1.6
/// @param ev the withdrawal event
export function handleWithdrawalDAI(ev: LogWithdrawalDai): void {
    handleWithdrawal(
        ev,
        Token.GRO_DAI_E_VAULT_V1_6,
        stratDai_1_6_Address,
        vaultDai_1_6_Address,
    );
}
export function handleWithdrawalUSDC(ev: LogWithdrawalUsdc): void {
    handleWithdrawal(
        ev,
        Token.GRO_USDC_E_VAULT_V1_6,
        stratUsdc_1_6_Address,
        vaultUsdc_1_6_Address,
    );
}
export function handleWithdrawalUSDT(ev: LogWithdrawalUsdt): void {
    handleWithdrawal(
        ev,
        Token.GRO_USDT_E_VAULT_V1_6,
        stratUsdt_1_6_Address,
        vaultUsdt_1_6_Address,
    );
}

/// @notice Handles <LogStrategyReported> events from Vaults v1.6
/// @param ev the strategy reported event
export function handleStrategyReportedDAI(event: LogStrategyReportedDai): void {
    handleStrategyReported(
        Token.GRO_DAI_E_VAULT_V1_6,
        stratDai_1_6_Address,
        vaultDai_1_6_Address,
    );
}
export function handleStrategyReportedUSDC(event: LogStrategyReportedUsdc): void {
    handleStrategyReported(
        Token.GRO_USDC_E_VAULT_V1_6,
        stratUsdc_1_6_Address,
        vaultUsdc_1_6_Address,
    );
}
export function handleStrategyReportedUSDT(event: LogStrategyReportedUsdt): void {
    handleStrategyReported(
        Token.GRO_USDT_E_VAULT_V1_6,
        stratUsdt_1_6_Address,
        vaultUsdt_1_6_Address,
    );
}

/// @notice Handles <LogNewStrategyHarvest> events from Vaults v1.6
/// @dev No event data is needed; used to update total assets through contract calls
export function handleNewStrategyHarvestDAI(_: LogNewStrategyHarvestDai): void {
    handleStrategyReported(
        Token.GRO_DAI_E_VAULT_V1_6,
        stratDai_1_6_Address,
        vaultDai_1_6_Address,
    );
}
export function handleNewStrategyHarvestUSDC(_: LogNewStrategyHarvestUsdc): void {
    handleStrategyReported(
        Token.GRO_USDC_E_VAULT_V1_6,
        stratUsdc_1_6_Address,
        vaultUsdc_1_6_Address,
    );
}
export function handleNewStrategyHarvestUSDT(_: LogNewStrategyHarvestUsdt): void {
    handleStrategyReported(
        Token.GRO_USDT_E_VAULT_V1_6,
        stratUsdt_1_6_Address,
        vaultUsdt_1_6_Address,
    );
}

/// @notice Handles <LogDepositLimit> events from Vaults v1.6
/// @param ev the deposit limit event
export function handleDepositLimitDAI(event: LogDepositLimitDai): void {
    setDepositLimit(
        stratDai_1_6_Address,
        tokenToDecimal(event.params.newLimit, 18, DECIMALS),
    );
}
export function handleDepositLimitUSDC(event: LogDepositLimitUsdc): void {
    setDepositLimit(
        stratUsdc_1_6_Address,
        tokenToDecimal(event.params.newLimit, 6, DECIMALS),
    );
}
export function handleDepositLimitUSDT(event: LogDepositLimitUsdt): void {
    setDepositLimit(
        stratUsdt_1_6_Address,
        tokenToDecimal(event.params.newLimit, 6, DECIMALS),
    );
}
