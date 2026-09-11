import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { OrganizationRole, OrganizationRoleLoadMatch } from '../GithubTypes';
declare class OrganizationRoleEntity extends GithubEntityBase<OrganizationRole> {
    constructor(client: GithubSDK, entopts: any);
    make(this: OrganizationRoleEntity): OrganizationRoleEntity;
    load(this: any, reqmatch?: OrganizationRoleLoadMatch, ctrl?: Control): Promise<OrganizationRoleEntity>;
}
export { OrganizationRoleEntity };
