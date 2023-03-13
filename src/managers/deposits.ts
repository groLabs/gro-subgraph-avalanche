import { setUser } from '../setters/users'
import { setTotals } from '../setters/totals';
import { DepoWithdraw } from '../types/depowithdraw';
import { TX_TYPE as TxType } from '../utils/constants';
import { setDepoWithdrawTx } from '../setters/depowithdraw';


// Deposit to Labs
export const manageDeposit = (
    ev: DepoWithdraw,
    token: string,
): void => {

    // Creates user if not existing yet in entity <User>
    setUser(ev.userAddress);

    // Stores deposit tx in entity <TransferTx>
    const tx = setDepoWithdrawTx(ev, token);

    // Updates user totals in entity <Totals>
    setTotals(
        TxType.CORE_DEPOSIT,
        token,
        tx.user_address,
        tx.coin_amount,
        tx.usd_amount,
    );
}