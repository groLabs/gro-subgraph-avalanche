import { Address } from '@graphprotocol/graph-ts';
import {
    VAULTS,
    ZERO_ADDR,
} from '../utils/constants';

const isDepositOrWithdrawal = (
    from: Address,
    to: Address,
    contract: Address
): bool => {
    const res = (
        (from == ZERO_ADDR || to == ZERO_ADDR)
        && VAULTS.includes(contract)
    )
        ? true
        : false;

    return res;
}

export {
    isDepositOrWithdrawal,
}










