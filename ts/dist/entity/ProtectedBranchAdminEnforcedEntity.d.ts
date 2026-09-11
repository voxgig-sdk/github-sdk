import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ProtectedBranchAdminEnforced, ProtectedBranchAdminEnforcedLoadMatch, ProtectedBranchAdminEnforcedCreateData } from '../GithubTypes';
declare class ProtectedBranchAdminEnforcedEntity extends GithubEntityBase<ProtectedBranchAdminEnforced> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ProtectedBranchAdminEnforcedEntity): ProtectedBranchAdminEnforcedEntity;
    load(this: any, reqmatch?: ProtectedBranchAdminEnforcedLoadMatch, ctrl?: Control): Promise<ProtectedBranchAdminEnforcedEntity>;
    create(this: any, reqdata?: ProtectedBranchAdminEnforcedCreateData, ctrl?: Control): Promise<ProtectedBranchAdminEnforcedEntity>;
}
export { ProtectedBranchAdminEnforcedEntity };
