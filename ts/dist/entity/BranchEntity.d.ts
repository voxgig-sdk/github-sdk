import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Branch, BranchLoadMatch } from '../GithubTypes';
declare class BranchEntity extends GithubEntityBase<Branch> {
    constructor(client: GithubSDK, entopts: any);
    make(this: BranchEntity): BranchEntity;
    load(this: any, reqmatch?: BranchLoadMatch, ctrl?: Control): Promise<BranchEntity>;
}
export { BranchEntity };
