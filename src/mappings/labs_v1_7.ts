import {
  Approval as dai1_7_ApprovalEvent,
  Transfer as dai1_7_TransferEvent
} from '../../generated/avaxdaivault_v1_7/ERC20';
import {
  Approval as usdc1_7_ApprovalEvent,
  Transfer as usdc1_7_TransferEvent
} from '../../generated/avaxusdcvault_v1_7/ERC20';
import {
  Approval as usdt1_7_ApprovalEvent,
  Transfer as usdt1_7_TransferEvent
} from '../../generated/avaxusdtvault_v1_7/ERC20';
import {
  LogDeposit as dai1_7_DepositEvent,
  LogWithdrawal as dai1_7_WithdrawalEvent,
  LogStrategyReported as dai1_7_StrategyReportedEvent,
  LogNewStrategyHarvest as dai1_7_NewStrategyHarvestEvent,
} from '../../generated/avaxdaistrategy_v1_7/VaultAdaptorMK2_v1_7';
import {
  LogDeposit as usdc1_7_DepositEvent,
  LogWithdrawal as usdc1_7_WithdrawalEvent,
  LogStrategyReported as usdc1_7_StrategyReportedEvent,
  LogNewStrategyHarvest as usdc1_7_NewStrategyHarvestEvent,
} from '../../generated/avaxusdcstrategy_v1_7/VaultAdaptorMK2_v1_7';
import {
  LogDeposit as usdt1_7_DepositEvent,
  LogWithdrawal as usdt1_7_WithdrawalEvent,
  LogStrategyReported as usdt1_7_StrategyReportedEvent,
  LogNewStrategyHarvest as usdt1_7_NewStrategyHarvestEvent,
} from '../../generated/avaxusdtstrategy_v1_7/VaultAdaptorMK2_v1_7';

import { parseApprovalEvent } from '../parsers/approval';
import { parseTransferEvent } from '../parsers/transfer';
import { parseDepositEvent } from '../parsers/deposit';
import { parseWithdrawalEvent } from '../parsers/withdrawal';

import { manageApproval } from '../managers/approvals';
import { manageTransfer } from '../managers/transfers';
import { manageDeposit } from '../managers/deposits';
import { manageWithdrawal } from '../managers/withdrawals';

import { setLatestPrice } from '../setters/price';
import { isDepositOrWithdrawal} from '../utils/contracts';


// Transfers

export function handleTransferDAI(event: dai1_7_TransferEvent): void {
  if (!isDepositOrWithdrawal(
    event.params.from,
    event.params.to,
    event.address
  )) {
    const ev = parseTransferEvent(event);
    manageTransfer(ev, 'groDAI_e_vault_v1_7');
  }
}

export function handleTransferUSDC(event: usdc1_7_TransferEvent): void {
  if (!isDepositOrWithdrawal(
    event.params.from,
    event.params.to,
    event.address
  )) {
    const ev = parseTransferEvent(event);
    manageTransfer(ev, 'groUSDC_e_vault_v1_7');
  }
}

export function handleTransferUSDT(event: usdt1_7_TransferEvent): void {
  if (!isDepositOrWithdrawal(
    event.params.from,
    event.params.to,
    event.address
  )) {
    const ev = parseTransferEvent(event);
    manageTransfer(ev, 'groUSDT_e_vault_v1_7');
  }
}

// Approvals

export function handleApprovaDAI(event: dai1_7_ApprovalEvent): void {
  const ev = parseApprovalEvent(event);
  manageApproval(ev, 'groDAI_e_vault_v1_7');
}

export function handleApprovalUSDC(event: usdc1_7_ApprovalEvent): void {
  const ev = parseApprovalEvent(event);
  manageApproval(ev, 'groUSDC_e_vault_v1_7');
}

export function handleApprovalUSDT(event: usdt1_7_ApprovalEvent): void {
  const ev = parseApprovalEvent(event);
  manageApproval(ev, 'groUSDT_e_vault_v1_7');
}

// Deposits

export function handleDepositDAI(event: dai1_7_DepositEvent): void {
  setLatestPrice('groDAI_e_vault_v1_7');
  const ev = parseDepositEvent(event);
  manageDeposit(ev, 'groDAI_e_vault_v1_7');
}

export function handleDepositUSDC(event: usdc1_7_DepositEvent): void {
  setLatestPrice('groUSDC_e_vault_v1_7');
  const ev = parseDepositEvent(event);
  manageDeposit(ev, 'groUSDC_e_vault_v1_7');
}

export function handleDepositUSDT(event: usdt1_7_DepositEvent): void {
  setLatestPrice('groUSDT_e_vault_v1_7');
  const ev = parseDepositEvent(event);
  manageDeposit(ev, 'groUSDT_e_vault_v1_7');
}

// Withdrawals

export function handleWithdrawalDAI(event: dai1_7_WithdrawalEvent): void {
  setLatestPrice('groDAI_e_vault_v1_7');
  const ev = parseWithdrawalEvent(event);
  manageWithdrawal(ev, 'groDAI_e_vault_v1_7');
}

export function handleWithdrawalUSDC(event: usdc1_7_WithdrawalEvent): void {
  setLatestPrice('groUSDC_e_vault_v1_7');
  const ev = parseWithdrawalEvent(event);
  manageWithdrawal(ev, 'groUSDC_e_vault_v1_7');
}

export function handleWithdrawalUSDT(event: usdt1_7_WithdrawalEvent): void {
  setLatestPrice('groUSDT_e_vault_v1_7');
  const ev = parseWithdrawalEvent(event);
  manageWithdrawal(ev, 'groUSDT_e_vault_v1_7');
}

// Strategy Reported

export function handleStrategyReportedDAI(event: dai1_7_StrategyReportedEvent): void {
  setLatestPrice('groDAI_e_vault_v1_7');
}

export function handleStrategyReportedUSDC(event: usdc1_7_StrategyReportedEvent): void {
  setLatestPrice('groUSDC_e_vault_v1_7');
}

export function handleStrategyReportedUSDT(event: usdt1_7_StrategyReportedEvent): void {
  setLatestPrice('groUSDT_e_vault_v1_7');
}

// New Strategy Harvest

export function handleNewStrategyHarvestDAI(event: dai1_7_NewStrategyHarvestEvent): void {
  setLatestPrice('groDAI_e_vault_v1_7');
}

export function handleNewStrategyHarvestUSDC(event: usdc1_7_NewStrategyHarvestEvent): void {
  setLatestPrice('groUSDC_e_vault_v1_7');
}

export function handleNewStrategyHarvestUSDT(event: usdt1_7_NewStrategyHarvestEvent): void {
  setLatestPrice('groUSDT_e_vault_v1_7');
}
