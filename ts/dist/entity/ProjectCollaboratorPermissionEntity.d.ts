import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ProjectCollaboratorPermission, ProjectCollaboratorPermissionLoadMatch } from '../GithubTypes';
declare class ProjectCollaboratorPermissionEntity extends GithubEntityBase<ProjectCollaboratorPermission> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ProjectCollaboratorPermissionEntity): ProjectCollaboratorPermissionEntity;
    load(this: any, reqmatch?: ProjectCollaboratorPermissionLoadMatch, ctrl?: Control): Promise<ProjectCollaboratorPermissionEntity>;
}
export { ProjectCollaboratorPermissionEntity };
