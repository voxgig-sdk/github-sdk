import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { OrgPrivateRegistryConfigurationWithSelectedRepository, OrgPrivateRegistryConfigurationWithSelectedRepositoryCreateData } from '../GithubTypes';
declare class OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity extends GithubEntityBase<OrgPrivateRegistryConfigurationWithSelectedRepository> {
    constructor(client: GithubSDK, entopts: any);
    make(this: OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity): OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity;
    create(this: any, reqdata?: OrgPrivateRegistryConfigurationWithSelectedRepositoryCreateData, ctrl?: Control): Promise<OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity>;
}
export { OrgPrivateRegistryConfigurationWithSelectedRepositoryEntity };
