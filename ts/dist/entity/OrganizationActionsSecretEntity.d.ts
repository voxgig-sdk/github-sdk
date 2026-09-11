import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { OrganizationActionsSecret, OrganizationActionsSecretLoadMatch } from '../GithubTypes';
declare class OrganizationActionsSecretEntity extends GithubEntityBase<OrganizationActionsSecret> {
    constructor(client: GithubSDK, entopts: any);
    make(this: OrganizationActionsSecretEntity): OrganizationActionsSecretEntity;
    load(this: any, reqmatch?: OrganizationActionsSecretLoadMatch, ctrl?: Control): Promise<OrganizationActionsSecretEntity>;
}
export { OrganizationActionsSecretEntity };
