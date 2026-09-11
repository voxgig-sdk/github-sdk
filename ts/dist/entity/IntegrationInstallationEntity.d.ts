import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { IntegrationInstallation, IntegrationInstallationListMatch } from '../GithubTypes';
declare class IntegrationInstallationEntity extends GithubEntityBase<IntegrationInstallation> {
    constructor(client: GithubSDK, entopts: any);
    make(this: IntegrationInstallationEntity): IntegrationInstallationEntity;
    list(this: any, reqmatch?: IntegrationInstallationListMatch, ctrl?: Control): Promise<IntegrationInstallationEntity[]>;
}
export { IntegrationInstallationEntity };
