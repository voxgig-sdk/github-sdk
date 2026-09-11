import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { GistComment, GistCommentLoadMatch, GistCommentListMatch, GistCommentCreateData, GistCommentUpdateData } from '../GithubTypes';
declare class GistCommentEntity extends GithubEntityBase<GistComment> {
    constructor(client: GithubSDK, entopts: any);
    make(this: GistCommentEntity): GistCommentEntity;
    load(this: any, reqmatch?: GistCommentLoadMatch, ctrl?: Control): Promise<GistCommentEntity>;
    list(this: any, reqmatch?: GistCommentListMatch, ctrl?: Control): Promise<GistCommentEntity[]>;
    create(this: any, reqdata?: GistCommentCreateData, ctrl?: Control): Promise<GistCommentEntity>;
    update(this: any, reqdata?: GistCommentUpdateData, ctrl?: Control): Promise<GistCommentEntity>;
}
export { GistCommentEntity };
