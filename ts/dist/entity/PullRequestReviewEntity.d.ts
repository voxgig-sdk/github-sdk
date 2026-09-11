import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { PullRequestReview, PullRequestReviewLoadMatch, PullRequestReviewListMatch, PullRequestReviewCreateData, PullRequestReviewUpdateData, PullRequestReviewRemoveMatch } from '../GithubTypes';
declare class PullRequestReviewEntity extends GithubEntityBase<PullRequestReview> {
    constructor(client: GithubSDK, entopts: any);
    make(this: PullRequestReviewEntity): PullRequestReviewEntity;
    load(this: any, reqmatch?: PullRequestReviewLoadMatch, ctrl?: Control): Promise<PullRequestReviewEntity>;
    list(this: any, reqmatch?: PullRequestReviewListMatch, ctrl?: Control): Promise<PullRequestReviewEntity[]>;
    create(this: any, reqdata?: PullRequestReviewCreateData, ctrl?: Control): Promise<PullRequestReviewEntity>;
    update(this: any, reqdata?: PullRequestReviewUpdateData, ctrl?: Control): Promise<PullRequestReviewEntity>;
    remove(this: any, reqmatch?: PullRequestReviewRemoveMatch, ctrl?: Control): Promise<PullRequestReviewEntity>;
}
export { PullRequestReviewEntity };
