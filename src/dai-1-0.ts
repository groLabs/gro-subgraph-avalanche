import { BigInt } from "@graphprotocol/graph-ts"
import {
  dai1_0,
  Approval,
  LogAddToWhitelist,
  LogDebtRatios,
  LogDeposit,
  LogDepositLimit,
  LogMigrate,
  LogNewAllowance,
  LogNewBouncer,
  LogNewDebtRatio,
  LogNewRewards,
  LogNewStrategyHarvest,
  LogNewVaultFee,
  LogRemoveFromWhitelist,
  LogStrategyAdded,
  LogStrategyAddedToQueue,
  LogStrategyMigrated,
  LogStrategyRemovedFromQueue,
  LogStrategyReported,
  LogStrategyRevoked,
  LogStrategyStatusUpdate,
  LogStrategyUpdateMaxDebtPerHarvest,
  LogStrategyUpdateMinDebtPerHarvest,
  LogUpdateWithdrawalQueue,
  LogWithdrawal,
  OwnershipTransferred,
  Transfer
} from "../generated/dai1_0/dai1_0"
import { ExampleEntity } from "../generated/schema"

export function handleApproval(event: Approval): void {
  // Entities can be loaded from the store using a string ID; this ID
  // needs to be unique across all entities of the same type
  let entity = ExampleEntity.load(event.transaction.from.toHex())

  // Entities only exist after they have been saved to the store;
  // `null` checks allow to create entities on demand
  if (!entity) {
    entity = new ExampleEntity(event.transaction.from.toHex())

    // Entity fields can be set using simple assignments
    entity.count = BigInt.fromI32(0)
  }

  // BigInt and BigDecimal math are supported
  entity.count = entity.count + BigInt.fromI32(1)

  // Entity fields can be set based on event parameters
  entity.owner = event.params.owner
  entity.spender = event.params.spender

  // Entities can be written to the store with `.save()`
  entity.save()

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract.MAXIMUM_STRATEGIES(...)
  // - contract.activation(...)
  // - contract.allowance(...)
  // - contract.approve(...)
  // - contract.balanceOf(...)
  // - contract.bouncer(...)
  // - contract.creditAvailable(...)
  // - contract.creditAvailable(...)
  // - contract.debtOutstanding(...)
  // - contract.debtOutstanding(...)
  // - contract.debtRatio(...)
  // - contract.decimals(...)
  // - contract.decreaseAllowance(...)
  // - contract.deposit(...)
  // - contract.depositLimit(...)
  // - contract.getPricePerShare(...)
  // - contract.getStrategiesLength(...)
  // - contract.getStrategyAssets(...)
  // - contract.increaseAllowance(...)
  // - contract.lastReport(...)
  // - contract.name(...)
  // - contract.owner(...)
  // - contract.report(...)
  // - contract.rewards(...)
  // - contract.strategies(...)
  // - contract.strategyDebt(...)
  // - contract.strategyHarvestTrigger(...)
  // - contract.symbol(...)
  // - contract.token(...)
  // - contract.totalAssets(...)
  // - contract.totalDebt(...)
  // - contract.totalEstimatedAssets(...)
  // - contract.totalSupply(...)
  // - contract.transfer(...)
  // - contract.transferFrom(...)
  // - contract.userAllowance(...)
  // - contract.vaultFee(...)
  // - contract.whitelist(...)
  // - contract.withdraw(...)
  // - contract.withdrawalQueue(...)
}

export function handleLogAddToWhitelist(event: LogAddToWhitelist): void {}

export function handleLogDebtRatios(event: LogDebtRatios): void {}

export function handleLogDeposit(event: LogDeposit): void {}

export function handleLogDepositLimit(event: LogDepositLimit): void {}

export function handleLogMigrate(event: LogMigrate): void {}

export function handleLogNewAllowance(event: LogNewAllowance): void {}

export function handleLogNewBouncer(event: LogNewBouncer): void {}

export function handleLogNewDebtRatio(event: LogNewDebtRatio): void {}

export function handleLogNewRewards(event: LogNewRewards): void {}

export function handleLogNewStrategyHarvest(
  event: LogNewStrategyHarvest
): void {}

export function handleLogNewVaultFee(event: LogNewVaultFee): void {}

export function handleLogRemoveFromWhitelist(
  event: LogRemoveFromWhitelist
): void {}

export function handleLogStrategyAdded(event: LogStrategyAdded): void {}

export function handleLogStrategyAddedToQueue(
  event: LogStrategyAddedToQueue
): void {}

export function handleLogStrategyMigrated(event: LogStrategyMigrated): void {}

export function handleLogStrategyRemovedFromQueue(
  event: LogStrategyRemovedFromQueue
): void {}

export function handleLogStrategyReported(event: LogStrategyReported): void {}

export function handleLogStrategyRevoked(event: LogStrategyRevoked): void {}

export function handleLogStrategyStatusUpdate(
  event: LogStrategyStatusUpdate
): void {}

export function handleLogStrategyUpdateMaxDebtPerHarvest(
  event: LogStrategyUpdateMaxDebtPerHarvest
): void {}

export function handleLogStrategyUpdateMinDebtPerHarvest(
  event: LogStrategyUpdateMinDebtPerHarvest
): void {}

export function handleLogUpdateWithdrawalQueue(
  event: LogUpdateWithdrawalQueue
): void {}

export function handleLogWithdrawal(event: LogWithdrawal): void {}

export function handleOwnershipTransferred(event: OwnershipTransferred): void {}

export function handleTransfer(event: Transfer): void {}
