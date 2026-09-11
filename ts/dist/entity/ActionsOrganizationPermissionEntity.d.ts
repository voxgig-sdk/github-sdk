import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ActionsOrganizationPermission, ActionsOrganizationPermissionLoadMatch } from '../GithubTypes';
declare class ActionsOrganizationPermissionEntity extends GithubEntityBase<ActionsOrganizationPermission> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ActionsOrganizationPermissionEntity): ActionsOrganizationPermissionEntity;
    load(this: any, reqmatch?: ActionsOrganizationPermissionLoadMatch, ctrl?: Control): Promise<ActionsOrganizationPermissionEntity>;
}
export { ActionsOrganizationPermissionEntity };
