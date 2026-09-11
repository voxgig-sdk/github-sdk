import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { GistCommit, GistCommitListMatch } from '../GithubTypes';
declare class GistCommitEntity extends GithubEntityBase<GistCommit> {
    constructor(client: GithubSDK, entopts: any);
    make(this: GistCommitEntity): GistCommitEntity;
    list(this: any, reqmatch?: GistCommitListMatch, ctrl?: Control): Promise<GistCommitEntity[]>;
}
export { GistCommitEntity };
