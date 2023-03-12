import {
    DECIMALS,
    TOKEN as Token,
} from '../utils/constants';
import { tokenToDecimal } from '../utils/tokens';
import { setDepositLimit } from '../setters/strats';
import {
    Approval as ApprovalEventDai,
    Transfer as TransferEventDai,
} from '../../generated/avaxdaivault_v1_7/ERC20';
import {
    Approval as ApprovalEventUsdc,
    Transfer as TransferEventUsdc,
} from '../../generated/avaxusdcvault_v1_7/ERC20';
import {
    Approval as ApprovalEventUsdt,
    Transfer as TransferEventUsdt,
} from '../../generated/avaxusdtvault_v1_7/ERC20';
import {
    LogDeposit as LogDepositEventDai,
    LogWithdrawal as LogWithdrawalDai,
    LogDepositLimit as LogDepositLimitDai,
    LogStrategyReported as LogStrategyReportedDai,
    LogNewStrategyHarvest as LogNewStrategyHarvestDai,
} from '../../generated/avaxdaivault_v1_7/VaultAdaptorMK2_v1_7';
import {
    LogDeposit as LogDepositEventUsdc,
    LogWithdrawal as LogWithdrawalUsdc,
    LogDepositLimit as LogDepositLimitUsdc,
    LogStrategyReported as LogStrategyReportedUsdc,
    LogNewStrategyHarvest as LogNewStrategyHarvestUsdc,
} from '../../generated/avaxusdcvault_v1_7/VaultAdaptorMK2_v1_7';
import {
    LogDeposit as LogDepositEventUsdt,
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


// Transfers v1_7
export function handleTransferDAI(ev: TransferEventDai): void {
    handleTransfer(ev, Token.GRO_DAI_E_VAULT_V1_7);
}
export function handleTransferUSDC(ev: TransferEventUsdc): void {
    handleTransfer(ev, Token.GRO_USDC_E_VAULT_V1_7);
}
export function handleTransferUSDT(ev: TransferEventUsdt): void {
    handleTransfer(ev, Token.GRO_USDT_E_VAULT_V1_7);
}

// Approvals v1_7
export function handleApprovalDAI(ev: ApprovalEventDai): void {
    handleApproval(ev, Token.GRO_DAI_E_VAULT_V1_7);
}
export function handleApprovalUSDC(ev: ApprovalEventUsdc): void {
    handleApproval(ev, Token.GRO_USDC_E_VAULT_V1_7);
}
export function handleApprovalUSDT(ev: ApprovalEventUsdt): void {
    handleApproval(ev, Token.GRO_USDT_E_VAULT_V1_7);
}

// Deposits v1_7
export function handleDepositDAI(ev: LogDepositEventDai): void {
    handleDeposit(ev, Token.GRO_DAI_E_VAULT_V1_7);
}
export function handleDepositUSDC(ev: LogDepositEventUsdc): void {
    handleDeposit(ev, Token.GRO_USDC_E_VAULT_V1_7);
}
export function handleDepositUSDT(ev: LogDepositEventUsdt): void {
    handleDeposit(ev, Token.GRO_USDT_E_VAULT_V1_7);
}

// Withdrawals v1_7
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

// Strategy Harvests v1_7
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

// New Strategy Harvests v1_7
export function handleNewStrategyHarvestDAI(event: LogNewStrategyHarvestDai): void {
    handleStrategyReported(
        Token.GRO_DAI_E_VAULT_V1_7,
        stratDai_1_7_Address,
        vaultDai_1_7_Address,
    );
}
export function handleNewStrategyHarvestUSDC(event: LogNewStrategyHarvestUsdc): void {
    handleStrategyReported(
        Token.GRO_USDC_E_VAULT_V1_7,
        stratUsdc_1_7_Address,
        vaultUsdc_1_7_Address,
    );
}
export function handleNewStrategyHarvestUSDT(event: LogNewStrategyHarvestUsdt): void {
    handleStrategyReported(
        Token.GRO_USDT_E_VAULT_V1_7,
        stratUsdt_1_7_Address,
        vaultUsdt_1_7_Address,
    );
}

// Deposit Limit v1_7
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
