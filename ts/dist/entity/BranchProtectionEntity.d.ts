import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { BranchProtection, BranchProtectionLoadMatch } from '../GithubTypes';
declare class BranchProtectionEntity extends GithubEntityBase<BranchProtection> {
    constructor(client: GithubSDK, entopts: any);
    make(this: BranchProtectionEntity): BranchProtectionEntity;
    load(this: any, reqmatch?: BranchProtectionLoadMatch, ctrl?: Control): Promise<BranchProtectionEntity>;
}
export { BranchProtectionEntity };
