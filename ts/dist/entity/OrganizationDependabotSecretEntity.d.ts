import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { OrganizationDependabotSecret, OrganizationDependabotSecretLoadMatch } from '../GithubTypes';
declare class OrganizationDependabotSecretEntity extends GithubEntityBase<OrganizationDependabotSecret> {
    constructor(client: GithubSDK, entopts: any);
    make(this: OrganizationDependabotSecretEntity): OrganizationDependabotSecretEntity;
    load(this: any, reqmatch?: OrganizationDependabotSecretLoadMatch, ctrl?: Control): Promise<OrganizationDependabotSecretEntity>;
}
export { OrganizationDependabotSecretEntity };
