import { LogHarvested as HarvestedDAI } from '../../generated/avaxdaistrategy_v1_7/AHv2Farmer_v1_7';
import { LogHarvested as HarvestedUSDC } from '../../generated/avaxusdcstrategy_v1_7/AHv2Farmer_v1_7';
import { LogHarvested as HarvestedUSDT } from '../../generated/avaxusdtstrategy_v1_7/AHv2Farmer_v1_7';
import { setLatestPrice } from '../setters/price';

export function handleLogHarvestedDAI(event: HarvestedDAI): void {
  setLatestPrice('groDAI_e_vault_v1_7');
}

export function handleLogHarvestedUSDC(event: HarvestedUSDC): void {
  setLatestPrice('groUSDC_e_vault_v1_7');
}

export function handleLogHarvestedUSDT(event: HarvestedUSDT): void {
  setLatestPrice('groUSDT_e_vault_v1_7');
}
