// SPDX-License-Identifier: AGPLv3

//  ________  ________  ________
//  |\   ____\|\   __  \|\   __  \
//  \ \  \___|\ \  \|\  \ \  \|\  \
//   \ \  \  __\ \   _  _\ \  \\\  \
//    \ \  \|\  \ \  \\  \\ \  \\\  \
//     \ \_______\ \__\\ _\\ \_______\
//      \|_______|\|__|\|__|\|_______|

// gro protocol - avalanche subgraph: https://github.com/groLabs/gro-subgraph-avalanche

/// @notice Handles approvals, deposits, withdrawals, transfers & harvests from Vaults v1.0
/// @dev One vault per gro stablecoin (groDAI, groUSDC, groUSDT)
///     - Vault DAI v1.0: 0x5e57e11483a3f60a76af3045303604522059da2a
///     - Vault USDC v1.0: 0x57daed1ee021be9991f5d30cf494b6b09b5b449e
///     - Vault USDT v1.0: 0x471f4b4b9a97f82c3a25b034b33a8e306ee9beb5

import { tokenToDecimal } from '../utils/tokens';
import { setDepositLimit } from '../setters/strats';
import { initMasterDataOnce } from '../setters/masterdata';
import {
    DECIMALS,
    TOKEN as Token,
} from '../utils/constants';
import {
    Approval as ApprovalDai,
    Transfer as TransferDai,
} from '../../generated/avaxdaivault_v1_0/ERC20';
import {
    Approval as ApprovalUsdc,
    Transfer as TransferUsdc,
} from '../../generated/avaxusdcvault_v1_0/ERC20';
import {
    Approval as ApprovalUsdt,
    Transfer as TransferUsdt,
} from '../../generated/avaxusdtvault_v1_0/ERC20';
import {
    LogDeposit as LogDepositDai,
    LogWithdrawal as LogWithdrawalDai,
    LogDepositLimit as LogDepositLimitDai,
    LogStrategyReported as LogStrategyReportedDai,
    LogNewStrategyHarvest as LogNewStrategyHarvestDai,
} from '../../generated/avaxdaivault_v1_0/VaultAdaptorMK2_v1_0';
import {
    LogDeposit as LogDepositUsdc,
    LogWithdrawal as LogWithdrawalUsdc,
    LogDepositLimit as LogDepositLimitUsdc,
    LogStrategyReported as LogStrategyReportedUsdc,
    OwnershipTransferred as OwnershipTransferredUsdc,
    LogNewStrategyHarvest as LogNewStrategyHarvestUsdc,
} from '../../generated/avaxusdcvault_v1_0/VaultAdaptorMK2_v1_0';
import {
    LogDeposit as LogDepositUsdt,
    LogWithdrawal as LogWithdrawalUsdt,
    LogDepositLimit as LogDepositLimitUsdt,
    LogStrategyReported as LogStrategyReportedUsdt,
    LogNewStrategyHarvest as LogNewStrategyHarvestUsdt,
} from '../../generated/avaxusdtvault_v1_0/VaultAdaptorMK2_v1_0';
import {
    vaultDai_1_0_Address,
    vaultUsdc_1_0_Address,
    vaultUsdt_1_0_Address,
    stratDai_1_0_Address,
    stratUsdc_1_0_Address,
    stratUsdt_1_0_Address,
} from '../utils/contracts';
import {
    handleDeposit,
    handleTransfer,
    handleApproval,
    handleWithdrawal,
    handleStrategyReported,
} from './labs_global_handlers';


/// @notice Handles <Transfer> events from Vaults v1.0
/// @param ev the transfer event
export function handleTransferDAI(ev: TransferDai): void {
    handleTransfer(ev, Token.GRO_DAI_E_VAULT_V1_0);
}
export function handleTransferUSDC(ev: TransferUsdc): void {
    handleTransfer(ev, Token.GRO_USDC_E_VAULT_V1_0);
}
export function handleTransferUSDT(ev: TransferUsdt): void {
    handleTransfer(ev, Token.GRO_USDT_E_VAULT_V1_0);
}

/// @notice Handles <Approal> events from Vaults v1.0
/// @param ev the approval event
export function handleApprovalDAI(ev: ApprovalDai): void {
    handleApproval(ev, Token.GRO_DAI_E_VAULT_V1_0);
}
export function handleApprovalUSDC(ev: ApprovalUsdc): void {
    handleApproval(ev, Token.GRO_USDC_E_VAULT_V1_0);
}
export function handleApprovalUSDT(ev: ApprovalUsdt): void {
    handleApproval(ev, Token.GRO_USDT_E_VAULT_V1_0);
}

/// @notice Handles <LogDeposit> events from Vaults v1.0
/// @param ev the deposit event
export function handleDepositDAI(ev: LogDepositDai): void {
    handleDeposit(ev, Token.GRO_DAI_E_VAULT_V1_0);
}
export function handleDepositUSDC(ev: LogDepositUsdc): void {
    handleDeposit(ev, Token.GRO_USDC_E_VAULT_V1_0);
}
export function handleDepositUSDT(ev: LogDepositUsdt): void {
    handleDeposit(ev, Token.GRO_USDT_E_VAULT_V1_0);
}

/// @notice Handles <LogWithdrawal> events from Vaults v1.0
/// @param ev the withdrawal event
export function handleWithdrawalDAI(ev: LogWithdrawalDai): void {
    handleWithdrawal(
        ev,
        Token.GRO_DAI_E_VAULT_V1_0,
        stratDai_1_0_Address,
        vaultDai_1_0_Address,
    );
}
export function handleWithdrawalUSDC(ev: LogWithdrawalUsdc): void {
    handleWithdrawal(
        ev,
        Token.GRO_USDC_E_VAULT_V1_0,
        stratUsdc_1_0_Address,
        vaultUsdc_1_0_Address,
    );
}
export function handleWithdrawalUSDT(ev: LogWithdrawalUsdt): void {
    handleWithdrawal(
        ev,
        Token.GRO_USDT_E_VAULT_V1_0,
        stratUsdt_1_0_Address,
        vaultUsdt_1_0_Address,
    );
}

/// @notice Handles <LogStrategyReported> events from Vaults v1.0
/// @param ev the strategy reported event
export function handleStrategyReportedDAI(event: LogStrategyReportedDai): void {
    handleStrategyReported(
        Token.GRO_DAI_E_VAULT_V1_0,
        stratDai_1_0_Address,
        vaultDai_1_0_Address,
    );
}
export function handleStrategyReportedUSDC(event: LogStrategyReportedUsdc): void {
    handleStrategyReported(
        Token.GRO_USDC_E_VAULT_V1_0,
        stratUsdc_1_0_Address,
        vaultUsdc_1_0_Address,
    );
}
export function handleStrategyReportedUSDT(event: LogStrategyReportedUsdt): void {
    handleStrategyReported(
        Token.GRO_USDT_E_VAULT_V1_0,
        stratUsdt_1_0_Address,
        vaultUsdt_1_0_Address,
    );
}

/// @notice Handles <LogNewStrategyHarvest> events from Vaults v1.0
/// @dev No event data is needed; used to update total assets through contract calls
export function handleNewStrategyHarvestDAI(_: LogNewStrategyHarvestDai): void {
    handleStrategyReported(
        Token.GRO_DAI_E_VAULT_V1_0,
        stratDai_1_0_Address,
        vaultDai_1_0_Address,
    );
}
export function handleNewStrategyHarvestUSDC(_: LogNewStrategyHarvestUsdc): void {
    handleStrategyReported(
        Token.GRO_USDC_E_VAULT_V1_0,
        stratUsdc_1_0_Address,
        vaultUsdc_1_0_Address,
    );
}
export function handleNewStrategyHarvestUSDT(_: LogNewStrategyHarvestUsdt): void {
    handleStrategyReported(
        Token.GRO_USDT_E_VAULT_V1_0,
        stratUsdt_1_0_Address,
        vaultUsdt_1_0_Address,
    );
}

/// @notice Handles <LogDepositLimit> events from Vaults v1.0
/// @param ev the deposit limit event
export function handleDepositLimitDAI(event: LogDepositLimitDai): void {
    setDepositLimit(
        stratDai_1_0_Address,
        tokenToDecimal(event.params.newLimit, 18, DECIMALS),
    );
}
export function handleDepositLimitUSDC(event: LogDepositLimitUsdc): void {
    setDepositLimit(
        stratUsdc_1_0_Address,
        tokenToDecimal(event.params.newLimit, 6, DECIMALS),
    );
}
export function handleDepositLimitUSDT(event: LogDepositLimitUsdt): void {
    setDepositLimit(
        stratUsdt_1_0_Address,
        tokenToDecimal(event.params.newLimit, 6, DECIMALS),
    );
}


/// @notice Handles <OwnershipTransferredDai> events from Vaults v1.0
/// @dev No parameter is needed: this function is used to initialise Masterdata once
///      for production environment
export function handleOwnershipTransferredUSDC(_: OwnershipTransferredUsdc): void {
    initMasterDataOnce();
}