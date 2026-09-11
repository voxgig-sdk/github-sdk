import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { BranchWithProtection, BranchWithProtectionCreateData } from '../GithubTypes';
declare class BranchWithProtectionEntity extends GithubEntityBase<BranchWithProtection> {
    constructor(client: GithubSDK, entopts: any);
    make(this: BranchWithProtectionEntity): BranchWithProtectionEntity;
    create(this: any, reqdata?: BranchWithProtectionCreateData, ctrl?: Control): Promise<BranchWithProtectionEntity>;
}
export { BranchWithProtectionEntity };
