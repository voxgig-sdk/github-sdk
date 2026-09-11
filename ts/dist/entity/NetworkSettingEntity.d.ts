import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { NetworkSetting, NetworkSettingLoadMatch } from '../GithubTypes';
declare class NetworkSettingEntity extends GithubEntityBase<NetworkSetting> {
    constructor(client: GithubSDK, entopts: any);
    make(this: NetworkSettingEntity): NetworkSettingEntity;
    load(this: any, reqmatch?: NetworkSettingLoadMatch, ctrl?: Control): Promise<NetworkSettingEntity>;
}
export { NetworkSettingEntity };
