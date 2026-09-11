import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ReviewComment, ReviewCommentListMatch } from '../GithubTypes';
declare class ReviewCommentEntity extends GithubEntityBase<ReviewComment> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ReviewCommentEntity): ReviewCommentEntity;
    list(this: any, reqmatch?: ReviewCommentListMatch, ctrl?: Control): Promise<ReviewCommentEntity[]>;
}
export { ReviewCommentEntity };
