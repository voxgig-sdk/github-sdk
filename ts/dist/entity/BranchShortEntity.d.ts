import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { BranchShort, BranchShortListMatch } from '../GithubTypes';
declare class BranchShortEntity extends GithubEntityBase<BranchShort> {
    constructor(client: GithubSDK, entopts: any);
    make(this: BranchShortEntity): BranchShortEntity;
    list(this: any, reqmatch?: BranchShortListMatch, ctrl?: Control): Promise<BranchShortEntity[]>;
}
export { BranchShortEntity };
