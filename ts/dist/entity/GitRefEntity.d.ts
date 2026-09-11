import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { GitRef, GitRefLoadMatch, GitRefCreateData, GitRefUpdateData } from '../GithubTypes';
declare class GitRefEntity extends GithubEntityBase<GitRef> {
    constructor(client: GithubSDK, entopts: any);
    make(this: GitRefEntity): GitRefEntity;
    load(this: any, reqmatch?: GitRefLoadMatch, ctrl?: Control): Promise<GitRefEntity>;
    create(this: any, reqdata?: GitRefCreateData, ctrl?: Control): Promise<GitRefEntity>;
    update(this: any, reqdata?: GitRefUpdateData, ctrl?: Control): Promise<GitRefEntity>;
}
export { GitRefEntity };
