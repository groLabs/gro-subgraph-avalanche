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
  LogDeposit as dai1_0_DepositEvent,
  LogWithdrawal as dai1_0_WithdrawalEvent,
  LogStrategyReported as dai1_0_StrategyReportedEvent,
  LogNewStrategyHarvest as dai1_0_NewStrategyHarvestEvent,
} from '../../generated/avaxdaistrategy_v1_0/VaultAdaptorMK2_v1_0';
import {
  LogDeposit as usdc1_0_DepositEvent,
  LogWithdrawal as usdc1_0_WithdrawalEvent,
  LogStrategyReported as usdc1_0_StrategyReportedEvent,
  LogNewStrategyHarvest as usdc1_0_NewStrategyHarvestEvent,
} from '../../generated/avaxusdcstrategy_v1_0/VaultAdaptorMK2_v1_0';
import {
  LogDeposit as usdt1_0_DepositEvent,
  LogWithdrawal as usdt1_0_WithdrawalEvent,
  LogStrategyReported as usdt1_0_StrategyReportedEvent,
  LogNewStrategyHarvest as usdt1_0_NewStrategyHarvestEvent,
} from '../../generated/avaxusdtstrategy_v1_0/VaultAdaptorMK2_v1_0';
import { parseApprovalEvent } from '../parsers/approval';
import { manageApproval } from '../managers/approvals';
import { parseTransferEvent } from '../parsers/transfer';
import { manageTransfer } from '../managers/transfers';
import { setLatestPrice } from '../setters/price';

// Transfers

export function handleTransferDAI(event: dai1_0_TransferEvent): void {
  const ev = parseTransferEvent(event);
  manageTransfer(ev, 'groDAI_e_vault_v1_0');
}

export function handleTransferUSDC(event: usdc1_0_TransferEvent): void {
  const ev = parseTransferEvent(event);
  manageTransfer(ev, 'groUSDC_e_vault_v1_0');
}

export function handleTransferUSDT(event: usdt1_0_TransferEvent): void {
  const ev = parseTransferEvent(event);
  manageTransfer(ev, 'groUSDT_e_vault_v1_0');
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

export function handleDepositDAI(event: dai1_0_DepositEvent): void {
  setLatestPrice('groDAI_e_vault_v1_0');
}

export function handleDepositUSDC(event: usdc1_0_DepositEvent): void {
  setLatestPrice('groUSDC_e_vault_v1_0');
}

export function handleDepositUSDT(event: usdt1_0_DepositEvent): void {
  setLatestPrice('groUSDT_e_vault_v1_0');
}

// Withdrawals

export function handleWithdrawalDAI(event: dai1_0_WithdrawalEvent): void {
  setLatestPrice('groDAI_e_vault_v1_0');
}

export function handleWithdrawalUSDC(event: usdc1_0_WithdrawalEvent): void {
  setLatestPrice('groUSDC_e_vault_v1_0');
}

export function handleWithdrawalUSDT(event: usdt1_0_WithdrawalEvent): void {
  setLatestPrice('groUSDT_e_vault_v1_0');
}

// Strategy Reported

export function handleStrategyReportedDAI(event: dai1_0_StrategyReportedEvent): void {
  setLatestPrice('groDAI_e_vault_v1_0');
}

export function handleStrategyReportedUSDC(event: usdc1_0_StrategyReportedEvent): void {
  setLatestPrice('groUSDC_e_vault_v1_0');
}

export function handleStrategyReportedUSDT(event: usdt1_0_StrategyReportedEvent): void {
  setLatestPrice('groUSDT_e_vault_v1_0');
}

// New Strategy Harvest

export function handleNewStrategyHarvestDAI(event: dai1_0_NewStrategyHarvestEvent): void {
  setLatestPrice('groDAI_e_vault_v1_0');
}

export function handleNewStrategyHarvestUSDC(event: usdc1_0_NewStrategyHarvestEvent): void {
  setLatestPrice('groUSDC_e_vault_v1_0');
}

export function handleNewStrategyHarvestUSDT(event: usdt1_0_NewStrategyHarvestEvent): void {
  setLatestPrice('groUSDT_e_vault_v1_0');
}
