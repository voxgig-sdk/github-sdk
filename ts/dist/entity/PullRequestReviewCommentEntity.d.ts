import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { PullRequestReviewComment, PullRequestReviewCommentLoadMatch, PullRequestReviewCommentListMatch, PullRequestReviewCommentCreateData, PullRequestReviewCommentUpdateData } from '../GithubTypes';
declare class PullRequestReviewCommentEntity extends GithubEntityBase<PullRequestReviewComment> {
    constructor(client: GithubSDK, entopts: any);
    make(this: PullRequestReviewCommentEntity): PullRequestReviewCommentEntity;
    load(this: any, reqmatch?: PullRequestReviewCommentLoadMatch, ctrl?: Control): Promise<PullRequestReviewCommentEntity>;
    list(this: any, reqmatch?: PullRequestReviewCommentListMatch, ctrl?: Control): Promise<PullRequestReviewCommentEntity[]>;
    create(this: any, reqdata?: PullRequestReviewCommentCreateData, ctrl?: Control): Promise<PullRequestReviewCommentEntity>;
    update(this: any, reqdata?: PullRequestReviewCommentUpdateData, ctrl?: Control): Promise<PullRequestReviewCommentEntity>;
}
export { PullRequestReviewCommentEntity };
