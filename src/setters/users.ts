import { ADDR } from '../utils/constants';
import { initMD } from '../setters/masterdata';
import { Bytes } from '@graphprotocol/graph-ts';
import { initAllStrategies } from '../setters/strats';
import {
    User,
    MasterData,
} from '../../generated/schema';


const initMasterDataOnce = (): void => {
    let md = MasterData.load(ADDR.ZERO);
    if (!md) {
        md = initMD();
        md.save();
        initAllStrategies();
    }
}

export const setUser = (userAddress: Bytes): User => {
    initMasterDataOnce();
    let user = User.load(userAddress);
    if (!user) {
        user = new User(userAddress);
        user.save();
    }
    return user;
}
