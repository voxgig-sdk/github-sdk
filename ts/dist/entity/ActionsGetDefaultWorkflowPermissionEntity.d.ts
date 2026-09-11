import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ActionsGetDefaultWorkflowPermission, ActionsGetDefaultWorkflowPermissionLoadMatch } from '../GithubTypes';
declare class ActionsGetDefaultWorkflowPermissionEntity extends GithubEntityBase<ActionsGetDefaultWorkflowPermission> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ActionsGetDefaultWorkflowPermissionEntity): ActionsGetDefaultWorkflowPermissionEntity;
    load(this: any, reqmatch?: ActionsGetDefaultWorkflowPermissionLoadMatch, ctrl?: Control): Promise<ActionsGetDefaultWorkflowPermissionEntity>;
}
export { ActionsGetDefaultWorkflowPermissionEntity };
