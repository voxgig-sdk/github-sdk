import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { NetworkConfiguration, NetworkConfigurationLoadMatch, NetworkConfigurationCreateData, NetworkConfigurationUpdateData } from '../GithubTypes';
declare class NetworkConfigurationEntity extends GithubEntityBase<NetworkConfiguration> {
    constructor(client: GithubSDK, entopts: any);
    make(this: NetworkConfigurationEntity): NetworkConfigurationEntity;
    load(this: any, reqmatch?: NetworkConfigurationLoadMatch, ctrl?: Control): Promise<NetworkConfigurationEntity>;
    create(this: any, reqdata?: NetworkConfigurationCreateData, ctrl?: Control): Promise<NetworkConfigurationEntity>;
    update(this: any, reqdata?: NetworkConfigurationUpdateData, ctrl?: Control): Promise<NetworkConfigurationEntity>;
}
export { NetworkConfigurationEntity };
