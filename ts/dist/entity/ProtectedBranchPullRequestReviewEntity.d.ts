import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ProtectedBranchPullRequestReview, ProtectedBranchPullRequestReviewLoadMatch, ProtectedBranchPullRequestReviewUpdateData } from '../GithubTypes';
declare class ProtectedBranchPullRequestReviewEntity extends GithubEntityBase<ProtectedBranchPullRequestReview> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ProtectedBranchPullRequestReviewEntity): ProtectedBranchPullRequestReviewEntity;
    load(this: any, reqmatch?: ProtectedBranchPullRequestReviewLoadMatch, ctrl?: Control): Promise<ProtectedBranchPullRequestReviewEntity>;
    update(this: any, reqdata?: ProtectedBranchPullRequestReviewUpdateData, ctrl?: Control): Promise<ProtectedBranchPullRequestReviewEntity>;
}
export { ProtectedBranchPullRequestReviewEntity };
