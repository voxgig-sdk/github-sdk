import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CommitComparison, CommitComparisonLoadMatch } from '../GithubTypes';
declare class CommitComparisonEntity extends GithubEntityBase<CommitComparison> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CommitComparisonEntity): CommitComparisonEntity;
    load(this: any, reqmatch?: CommitComparisonLoadMatch, ctrl?: Control): Promise<CommitComparisonEntity>;
}
export { CommitComparisonEntity };
