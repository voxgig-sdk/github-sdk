import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { OrgPrivateRegistryConfiguration, OrgPrivateRegistryConfigurationLoadMatch } from '../GithubTypes';
declare class OrgPrivateRegistryConfigurationEntity extends GithubEntityBase<OrgPrivateRegistryConfiguration> {
    constructor(client: GithubSDK, entopts: any);
    make(this: OrgPrivateRegistryConfigurationEntity): OrgPrivateRegistryConfigurationEntity;
    load(this: any, reqmatch?: OrgPrivateRegistryConfigurationLoadMatch, ctrl?: Control): Promise<OrgPrivateRegistryConfigurationEntity>;
}
export { OrgPrivateRegistryConfigurationEntity };
