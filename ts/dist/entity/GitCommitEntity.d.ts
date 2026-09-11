import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { GitCommit, GitCommitLoadMatch, GitCommitCreateData } from '../GithubTypes';
declare class GitCommitEntity extends GithubEntityBase<GitCommit> {
    constructor(client: GithubSDK, entopts: any);
    make(this: GitCommitEntity): GitCommitEntity;
    load(this: any, reqmatch?: GitCommitLoadMatch, ctrl?: Control): Promise<GitCommitEntity>;
    create(this: any, reqdata?: GitCommitCreateData, ctrl?: Control): Promise<GitCommitEntity>;
}
export { GitCommitEntity };
