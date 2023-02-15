import { DECIMALS } from '../utils/constants';
import { tokenToDecimal } from '../utils/tokens';
import { setDepositLimit } from '../setters/strats';
import {
    Approval as ApprovalEventDai,
    Transfer as TransferEventDai,
} from '../../generated/avaxdaivault_v1_6/ERC20';
import {
    Approval as ApprovalEventUsdc,
    Transfer as TransferEventUsdc,
} from '../../generated/avaxusdcvault_v1_6/ERC20';
import {
    Approval as ApprovalEventUsdt,
    Transfer as TransferEventUsdt,
} from '../../generated/avaxusdtvault_v1_6/ERC20';
import {
    LogDeposit as LogDepositEventDai,
    LogWithdrawal as LogWithdrawalDai,
    LogDepositLimit as LogDepositLimitDai,
    LogStrategyReported as LogStrategyReportedDai,
    LogNewStrategyHarvest as LogNewStrategyHarvestDai,
} from '../../generated/avaxdaivault_v1_6/VaultAdaptorMK2_v1_6';
import {
    LogDeposit as LogDepositEventUsdc,
    LogWithdrawal as LogWithdrawalUsdc,
    LogDepositLimit as LogDepositLimitUsdc,
    LogStrategyReported as LogStrategyReportedUsdc,
    LogNewStrategyHarvest as LogNewStrategyHarvestUsdc,
} from '../../generated/avaxusdcvault_v1_6/VaultAdaptorMK2_v1_6';
import {
    LogDeposit as LogDepositEventUsdt,
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


// Transfers v1_6
export function handleTransferDAI(ev: TransferEventDai): void {
    handleTransfer(ev, 'groDAI_e_vault_v1_6');
}
export function handleTransferUSDC(ev: TransferEventUsdc): void {
    handleTransfer(ev, 'groUSDC_e_vault_v1_6');
}
export function handleTransferUSDT(ev: TransferEventUsdt): void {
    handleTransfer(ev, 'groUSDT_e_vault_v1_6');
}

// Approvals v1_6
export function handleApprovalDAI(ev: ApprovalEventDai): void {
    handleApproval(ev, 'groDAI_e_vault_v1_6');
}
export function handleApprovalUSDC(ev: ApprovalEventUsdc): void {
    handleApproval(ev, 'groUSDC_e_vault_v1_6');
}
export function handleApprovalUSDT(ev: ApprovalEventUsdt): void {
    handleApproval(ev, 'groUSDT_e_vault_v1_6');
}

// Deposits v1_6
export function handleDepositDAI(ev: LogDepositEventDai): void {
    handleDeposit(ev, 'groDAI_e_vault_v1_6');
}
export function handleDepositUSDC(ev: LogDepositEventUsdc): void {
    handleDeposit(ev, 'groUSDC_e_vault_v1_6');
}
export function handleDepositUSDT(ev: LogDepositEventUsdt): void {
    handleDeposit(ev, 'groUSDT_e_vault_v1_6');
}

// Withdrawals v1_6
export function handleWithdrawalDAI(ev: LogWithdrawalDai): void {
    handleWithdrawal(
        ev,
        'groDAI_e_vault_v1_6',
        stratDai_1_6_Address,
        vaultDai_1_6_Address,
    );
}
export function handleWithdrawalUSDC(ev: LogWithdrawalUsdc): void {
    handleWithdrawal(
        ev,
        'groUSDC_e_vault_v1_6',
        stratUsdc_1_6_Address,
        vaultUsdc_1_6_Address,
    );
}
export function handleWithdrawalUSDT(ev: LogWithdrawalUsdt): void {
    handleWithdrawal(
        ev,
        'groUSDT_e_vault_v1_6',
        stratUsdt_1_6_Address,
        vaultUsdt_1_6_Address,
    );
}

// Strategy Harvests v1_6
export function handleStrategyReportedDAI(event: LogStrategyReportedDai): void {
    handleStrategyReported(
        'groDAI_e_vault_v1_6',
        stratDai_1_6_Address,
        vaultDai_1_6_Address,
    );
}
export function handleStrategyReportedUSDC(event: LogStrategyReportedUsdc): void {
    handleStrategyReported(
        'groUSDC_e_vault_v1_6',
        stratUsdc_1_6_Address,
        vaultUsdc_1_6_Address,
    );
}
export function handleStrategyReportedUSDT(event: LogStrategyReportedUsdt): void {
    handleStrategyReported(
        'groUSDT_e_vault_v1_6',
        stratUsdt_1_6_Address,
        vaultUsdt_1_6_Address,
    );
}

// New Strategy Harvests v1_6
export function handleNewStrategyHarvestDAI(event: LogNewStrategyHarvestDai): void {
    handleStrategyReported(
        'groDAI_e_vault_v1_6',
        stratDai_1_6_Address,
        vaultDai_1_6_Address,
    );
}
export function handleNewStrategyHarvestUSDC(event: LogNewStrategyHarvestUsdc): void {
    handleStrategyReported(
        'groUSDC_e_vault_v1_6',
        stratUsdc_1_6_Address,
        vaultUsdc_1_6_Address,
    );
}
export function handleNewStrategyHarvestUSDT(event: LogNewStrategyHarvestUsdt): void {
    handleStrategyReported(
        'groUSDT_e_vault_v1_6',
        stratUsdt_1_6_Address,
        vaultUsdt_1_6_Address,
    );
}

// Deposit Limit v1_6
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
