import {
  Approval as dai1_0_ApprovalEvent,
  Transfer as dai1_0_TransferEvent
} from '../../generated/avaxdaivault_v1_0/ERC20';
import {
  Approval as usdc1_0_ApprovalEvent,
  Transfer as usdc1_0_TransferEvent
} from '../../generated/avaxusdcvault_v1_0/ERC20';
import {
  Approval as usdt1_0_ApprovalEvent,
  Transfer as usdt1_0_TransferEvent
} from '../../generated/avaxusdtvault_v1_0/ERC20';
import { parseApprovalEvent } from '../parsers/approval';
import { manageApproval } from '../managers/approvals';
import { parseTransferEvent } from '../parsers/transfer';
import { manageTransfer } from '../managers/transfers';


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