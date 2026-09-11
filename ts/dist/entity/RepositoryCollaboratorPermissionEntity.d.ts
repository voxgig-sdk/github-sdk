import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { RepositoryCollaboratorPermission, RepositoryCollaboratorPermissionLoadMatch } from '../GithubTypes';
declare class RepositoryCollaboratorPermissionEntity extends GithubEntityBase<RepositoryCollaboratorPermission> {
    constructor(client: GithubSDK, entopts: any);
    make(this: RepositoryCollaboratorPermissionEntity): RepositoryCollaboratorPermissionEntity;
    load(this: any, reqmatch?: RepositoryCollaboratorPermissionLoadMatch, ctrl?: Control): Promise<RepositoryCollaboratorPermissionEntity>;
}
export { RepositoryCollaboratorPermissionEntity };
