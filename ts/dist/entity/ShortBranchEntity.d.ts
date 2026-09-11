import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ShortBranch, ShortBranchListMatch } from '../GithubTypes';
declare class ShortBranchEntity extends GithubEntityBase<ShortBranch> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ShortBranchEntity): ShortBranchEntity;
    list(this: any, reqmatch?: ShortBranchListMatch, ctrl?: Control): Promise<ShortBranchEntity[]>;
}
export { ShortBranchEntity };
