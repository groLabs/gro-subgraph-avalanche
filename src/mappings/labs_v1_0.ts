import { contracts } from '../../addresses';
import { setStrategy } from '../setters/strats';
import { Address } from '@graphprotocol/graph-ts';
import { parseApprovalEvent } from '../parsers/approval';
import { parseTransferEvent } from '../parsers/transfer';
import { parseDepositEvent } from '../parsers/deposit';
import { parseWithdrawalEvent } from '../parsers/withdrawal';
import { manageApproval } from '../managers/approvals';
import { manageTransfer } from '../managers/transfers';
import { manageDeposit } from '../managers/deposits';
import { manageWithdrawal } from '../managers/withdrawals';
import { setLatestPrice } from '../setters/price';
import { isDepositOrWithdrawal } from '../utils/contracts';
import {
    Approval as dai1_0_ApprovalEvent,
    Transfer as dai1_0_TransferEvent,
} from '../../generated/avaxdaivault_v1_0/ERC20';
import {
    Approval as usdc1_0_ApprovalEvent,
    Transfer as usdc1_0_TransferEvent
} from '../../generated/avaxusdcvault_v1_0/ERC20';
import {
    Approval as usdt1_0_ApprovalEvent,
    Transfer as usdt1_0_TransferEvent
} from '../../generated/avaxusdtvault_v1_0/ERC20';
import {
    LogDeposit as LogDepositEventDai,
    LogWithdrawal as LogWithdrawalDai,
    LogStrategyReported as LogStrategyReportedDai,
    LogNewStrategyHarvest as LogNewStrategyHarvestDai,
} from '../../generated/avaxdaivault_v1_0/VaultAdaptorMK2_v1_0';
import {
    LogDeposit as LogDepositEventUsdc,
    LogWithdrawal as LogWithdrawalUsdc,
    LogStrategyReported as LogStrategyReportedUsdc,
    LogNewStrategyHarvest as LogNewStrategyHarvestUsdc,
} from '../../generated/avaxusdcvault_v1_0/VaultAdaptorMK2_v1_0';
import {
    LogDeposit as LogDepositEventUsdt,
    LogWithdrawal as LogWithdrawalUsdt,
    LogStrategyReported as LogStrategyReportedUsdt,
    LogNewStrategyHarvest as LogNewStrategyHarvestUsdt,
} from '../../generated/avaxusdtvault_v1_0/VaultAdaptorMK2_v1_0';

// Contracts

const vaultDaiAddress = Address.fromString(contracts.AVAXDAIVault_v1_0_Address);
const vaultUsdcAddress = Address.fromString(contracts.AVAXUSDCVault_v1_0_Address);
const vaultUsdtAddress = Address.fromString(contracts.AVAXUSDTVault_v1_0_Address);
const stratDaiAddress = Address.fromString(contracts.AVAXDAIStrategy_v1_0_Address);
const stratUsdcAddress = Address.fromString(contracts.AVAXUSDCStrategy_v1_0_Address);
const stratUsdtAddress = Address.fromString(contracts.AVAXUSDTStrategy_v1_0_Address);

// Transfers

export function handleTransferDAI(event: dai1_0_TransferEvent): void {
    if (!isDepositOrWithdrawal(
        event.params.from,
        event.params.to,
        event.address
    )) {
        const ev = parseTransferEvent(event);
        manageTransfer(ev, 'groDAI_e_vault_v1_0');
    }
}

export function handleTransferUSDC(event: usdc1_0_TransferEvent): void {
    if (!isDepositOrWithdrawal(
        event.params.from,
        event.params.to,
        event.address
    )) {
        const ev = parseTransferEvent(event);
        manageTransfer(ev, 'groUSDC_e_vault_v1_0');
    }
}

export function handleTransferUSDT(event: usdt1_0_TransferEvent): void {
    if (!isDepositOrWithdrawal(
        event.params.from,
        event.params.to,
        event.address
    )) {
        const ev = parseTransferEvent(event);
        manageTransfer(ev, 'groUSDT_e_vault_v1_0');
    }
}

// Approvals

export function handleApprovaDAI(event: dai1_0_ApprovalEvent): void {
    const ev = parseApprovalEvent(event);
    manageApproval(ev, 'groDAI_e_vault_v1_0');
}

export function handleApprovalUSDC(event: usdc1_0_ApprovalEvent): void {
    const ev = parseApprovalEvent(event);
    manageApproval(ev, 'groUSDC_e_vault_v1_0');
}

export function handleApprovalUSDT(event: usdt1_0_ApprovalEvent): void {
    const ev = parseApprovalEvent(event);
    manageApproval(ev, 'groUSDT_e_vault_v1_0');
}

// Deposits

export function handleDepositDAI(event: LogDepositEventDai): void {
    setLatestPrice('groDAI_e_vault_v1_0');
    const ev = parseDepositEvent(event);
    manageDeposit(ev, 'groDAI_e_vault_v1_0');
}

export function handleDepositUSDC(event: LogDepositEventUsdc): void {
    setLatestPrice('groUSDC_e_vault_v1_0');
    const ev = parseDepositEvent(event);
    manageDeposit(ev, 'groUSDC_e_vault_v1_0');
}

export function handleDepositUSDT(event: LogDepositEventUsdt): void {
    setLatestPrice('groUSDT_e_vault_v1_0');
    const ev = parseDepositEvent(event);
    manageDeposit(ev, 'groUSDT_e_vault_v1_0');
}

// Withdrawals

export function handleWithdrawalDAI(event: LogWithdrawalDai): void {
    setLatestPrice('groDAI_e_vault_v1_0');
    const ev = parseWithdrawalEvent(event);
    manageWithdrawal(ev, 'groDAI_e_vault_v1_0');
    setStrategy(
        stratDaiAddress,
        vaultDaiAddress,
        18,
    );
}

export function handleWithdrawalUSDC(event: LogWithdrawalUsdc): void {
    setLatestPrice('groUSDC_e_vault_v1_0');
    const ev = parseWithdrawalEvent(event);
    manageWithdrawal(ev, 'groUSDC_e_vault_v1_0');
    setStrategy(
        stratUsdcAddress,
        vaultUsdcAddress,
        6,
    );
}

export function handleWithdrawalUSDT(event: LogWithdrawalUsdt): void {
    setLatestPrice('groUSDT_e_vault_v1_0');
    const ev = parseWithdrawalEvent(event);
    manageWithdrawal(ev, 'groUSDT_e_vault_v1_0');
    setStrategy(
        stratUsdtAddress,
        vaultUsdtAddress,
        6,
    );
}

// Strategy Harvests

export function handleStrategyReportedDAI(event: LogStrategyReportedDai): void {
    setLatestPrice('groDAI_e_vault_v1_0');
    setStrategy(
        stratDaiAddress,
        vaultDaiAddress,
        18,
    );
}

export function handleStrategyReportedUSDC(event: LogStrategyReportedUsdc): void {
    setLatestPrice('groUSDC_e_vault_v1_0');
    setStrategy(
        stratUsdcAddress,
        vaultUsdcAddress,
        6,
    );
}
export function handleStrategyReportedUSDT(event: LogStrategyReportedUsdt): void {
    setLatestPrice('groUSDT_e_vault_v1_0');
    setStrategy(
        stratUsdtAddress,
        vaultUsdtAddress,
        6,
    );
}


// New Strategy Harvest

export function handleNewStrategyHarvestDAI(event: LogNewStrategyHarvestDai): void {
    setLatestPrice('groDAI_e_vault_v1_0');
}

export function handleNewStrategyHarvestUSDC(event: LogNewStrategyHarvestUsdc): void {
    setLatestPrice('groUSDC_e_vault_v1_0');
}

export function handleNewStrategyHarvestUSDT(event: LogNewStrategyHarvestUsdt): void {
    setLatestPrice('groUSDT_e_vault_v1_0');
}