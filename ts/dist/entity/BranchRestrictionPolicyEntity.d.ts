import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { BranchRestrictionPolicy, BranchRestrictionPolicyListMatch } from '../GithubTypes';
declare class BranchRestrictionPolicyEntity extends GithubEntityBase<BranchRestrictionPolicy> {
    constructor(client: GithubSDK, entopts: any);
    make(this: BranchRestrictionPolicyEntity): BranchRestrictionPolicyEntity;
    list(this: any, reqmatch?: BranchRestrictionPolicyListMatch, ctrl?: Control): Promise<BranchRestrictionPolicyEntity[]>;
}
export { BranchRestrictionPolicyEntity };
