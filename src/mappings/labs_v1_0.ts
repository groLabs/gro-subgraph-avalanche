import { DECIMALS } from '../utils/constants';
import { setStrategy } from '../setters/strats';
import { tokenToDecimal } from '../utils/tokens';
import { parseApprovalEvent } from '../parsers/approval';
import { parseTransferEvent } from '../parsers/transfer';
import { parseDepositEvent } from '../parsers/deposit';
import { parseWithdrawalEvent } from '../parsers/withdrawal';
import { manageApproval } from '../managers/approvals';
import { manageTransfer } from '../managers/transfers';
import { manageDeposit } from '../managers/deposits';
import { manageWithdrawal } from '../managers/withdrawals';
import { setLatestPrice } from '../setters/price';
import { setDepositLimit } from '../setters/strats';
import { isDepositOrWithdrawal } from '../utils/contracts';
import {
    Approval as ApprovalEventDai,
    Transfer as TransferEventDai,
} from '../../generated/avaxdaivault_v1_0/ERC20';
import {
    Approval as ApprovalEventUsdc,
    Transfer as TransferEventUsdc,
} from '../../generated/avaxusdcvault_v1_0/ERC20';
import {
    Approval as ApprovalEventUsdt,
    Transfer as TransferEventUsdt,
} from '../../generated/avaxusdtvault_v1_0/ERC20';
import {
    LogDeposit as LogDepositEventDai,
    LogWithdrawal as LogWithdrawalDai,
    LogDepositLimit as LogDepositLimitDai,
    LogStrategyReported as LogStrategyReportedDai,
    LogNewStrategyHarvest as LogNewStrategyHarvestDai,
} from '../../generated/avaxdaivault_v1_0/VaultAdaptorMK2_v1_0';
import {
    LogDeposit as LogDepositEventUsdc,
    LogWithdrawal as LogWithdrawalUsdc,
    LogDepositLimit as LogDepositLimitUsdc,
    LogStrategyReported as LogStrategyReportedUsdc,
    LogNewStrategyHarvest as LogNewStrategyHarvestUsdc,
} from '../../generated/avaxusdcvault_v1_0/VaultAdaptorMK2_v1_0';
import {
    LogDeposit as LogDepositEventUsdt,
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


// Transfers
export function handleTransferDAI(event: TransferEventDai): void {
    if (!isDepositOrWithdrawal(
        event.params.from,
        event.params.to,
        event.address
    )) {
        const ev = parseTransferEvent(event);
        manageTransfer(ev, 'groDAI_e_vault_v1_0');
    }
}
export function handleTransferUSDC(event: TransferEventUsdc): void {
    if (!isDepositOrWithdrawal(
        event.params.from,
        event.params.to,
        event.address
    )) {
        const ev = parseTransferEvent(event);
        manageTransfer(ev, 'groUSDC_e_vault_v1_0');
    }
}
export function handleTransferUSDT(event: TransferEventUsdt): void {
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
export function handleApprovaDAI(event: ApprovalEventDai): void {
    const ev = parseApprovalEvent(event);
    manageApproval(ev, 'groDAI_e_vault_v1_0');
}
export function handleApprovalUSDC(event: ApprovalEventUsdc): void {
    const ev = parseApprovalEvent(event);
    manageApproval(ev, 'groUSDC_e_vault_v1_0');
}
export function handleApprovalUSDT(event: ApprovalEventUsdt): void {
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
        stratDai_1_0_Address,
        vaultDai_1_0_Address,
        18,
    );
}
export function handleWithdrawalUSDC(event: LogWithdrawalUsdc): void {
    setLatestPrice('groUSDC_e_vault_v1_0');
    const ev = parseWithdrawalEvent(event);
    manageWithdrawal(ev, 'groUSDC_e_vault_v1_0');
    setStrategy(
        stratUsdc_1_0_Address,
        vaultUsdc_1_0_Address,
        6,
    );
}
export function handleWithdrawalUSDT(event: LogWithdrawalUsdt): void {
    setLatestPrice('groUSDT_e_vault_v1_0');
    const ev = parseWithdrawalEvent(event);
    manageWithdrawal(ev, 'groUSDT_e_vault_v1_0');
    setStrategy(
        stratUsdt_1_0_Address,
        vaultUsdt_1_0_Address,
        6,
    );
}

// Strategy Harvests
export function handleStrategyReportedDAI(event: LogStrategyReportedDai): void {
    setLatestPrice('groDAI_e_vault_v1_0');
    setStrategy(
        stratDai_1_0_Address,
        vaultDai_1_0_Address,
        18,
    );
}
export function handleStrategyReportedUSDC(event: LogStrategyReportedUsdc): void {
    setLatestPrice('groUSDC_e_vault_v1_0');
    setStrategy(
        stratUsdc_1_0_Address,
        vaultUsdc_1_0_Address,
        6,
    );
}
export function handleStrategyReportedUSDT(event: LogStrategyReportedUsdt): void {
    setLatestPrice('groUSDT_e_vault_v1_0');
    setStrategy(
        stratUsdt_1_0_Address,
        vaultUsdt_1_0_Address,
        6,
    );
}

// New Strategy Harvest
export function handleNewStrategyHarvestDAI(event: LogNewStrategyHarvestDai): void {
    setLatestPrice('groDAI_e_vault_v1_0');
    setStrategy(
        stratDai_1_0_Address,
        vaultDai_1_0_Address,
        18,
    );
}
export function handleNewStrategyHarvestUSDC(event: LogNewStrategyHarvestUsdc): void {
    setLatestPrice('groUSDC_e_vault_v1_0');
    setStrategy(
        stratUsdc_1_0_Address,
        vaultUsdc_1_0_Address,
        6,
    );
}
export function handleNewStrategyHarvestUSDT(event: LogNewStrategyHarvestUsdt): void {
    setLatestPrice('groUSDT_e_vault_v1_0');
    setStrategy(
        stratUsdt_1_0_Address,
        vaultUsdt_1_0_Address,
        6,
    );
}

// Deposit Limit
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
