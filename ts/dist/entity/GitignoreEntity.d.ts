import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Gitignore, GitignoreListMatch } from '../GithubTypes';
declare class GitignoreEntity extends GithubEntityBase<Gitignore> {
    constructor(client: GithubSDK, entopts: any);
    make(this: GitignoreEntity): GitignoreEntity;
    list(this: any, reqmatch?: GitignoreListMatch, ctrl?: Control): Promise<GitignoreEntity[]>;
}
export { GitignoreEntity };
