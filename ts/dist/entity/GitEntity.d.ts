import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Git, GitRemoveMatch } from '../GithubTypes';
declare class GitEntity extends GithubEntityBase<Git> {
    constructor(client: GithubSDK, entopts: any);
    make(this: GitEntity): GitEntity;
    remove(this: any, reqmatch?: GitRemoveMatch, ctrl?: Control): Promise<GitEntity>;
}
export { GitEntity };
