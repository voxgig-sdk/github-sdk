import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CommitComment, CommitCommentLoadMatch, CommitCommentListMatch, CommitCommentCreateData, CommitCommentUpdateData } from '../GithubTypes';
declare class CommitCommentEntity extends GithubEntityBase<CommitComment> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CommitCommentEntity): CommitCommentEntity;
    load(this: any, reqmatch?: CommitCommentLoadMatch, ctrl?: Control): Promise<CommitCommentEntity>;
    list(this: any, reqmatch?: CommitCommentListMatch, ctrl?: Control): Promise<CommitCommentEntity[]>;
    create(this: any, reqdata?: CommitCommentCreateData, ctrl?: Control): Promise<CommitCommentEntity>;
    update(this: any, reqdata?: CommitCommentUpdateData, ctrl?: Control): Promise<CommitCommentEntity>;
}
export { CommitCommentEntity };
