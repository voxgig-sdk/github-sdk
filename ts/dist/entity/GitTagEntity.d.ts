import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { GitTag, GitTagLoadMatch, GitTagCreateData } from '../GithubTypes';
declare class GitTagEntity extends GithubEntityBase<GitTag> {
    constructor(client: GithubSDK, entopts: any);
    make(this: GitTagEntity): GitTagEntity;
    load(this: any, reqmatch?: GitTagLoadMatch, ctrl?: Control): Promise<GitTagEntity>;
    create(this: any, reqdata?: GitTagCreateData, ctrl?: Control): Promise<GitTagEntity>;
}
export { GitTagEntity };
