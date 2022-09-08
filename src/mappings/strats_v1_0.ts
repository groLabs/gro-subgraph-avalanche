import { Harvested as HarvestedDAI } from '../../generated/avaxdaistrategy_v1_0/AHv2Farmer_v1_0';
import { Harvested as HarvestedUSDC } from '../../generated/avaxusdcstrategy_v1_0/AHv2Farmer_v1_0';
import { Harvested as HarvestedUSDT } from '../../generated/avaxusdtstrategy_v1_0/AHv2Farmer_v1_0';
import { setLatestPrice } from '../setters/price';

export function handleHarvestedDAI(event: HarvestedDAI): void {
  setLatestPrice('groDAI_e_vault_v1_0');
}

export function handleHarvestedUSDC(event: HarvestedUSDC): void {
  setLatestPrice('groUSDC_e_vault_v1_0');
}

export function handleHarvestedUSDT(event: HarvestedUSDT): void {
  setLatestPrice('groUSDT_e_vault_v1_0');
}
