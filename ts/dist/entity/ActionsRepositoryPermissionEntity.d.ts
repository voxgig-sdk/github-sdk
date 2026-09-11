import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ActionsRepositoryPermission, ActionsRepositoryPermissionLoadMatch } from '../GithubTypes';
declare class ActionsRepositoryPermissionEntity extends GithubEntityBase<ActionsRepositoryPermission> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ActionsRepositoryPermissionEntity): ActionsRepositoryPermissionEntity;
    load(this: any, reqmatch?: ActionsRepositoryPermissionLoadMatch, ctrl?: Control): Promise<ActionsRepositoryPermissionEntity>;
}
export { ActionsRepositoryPermissionEntity };
