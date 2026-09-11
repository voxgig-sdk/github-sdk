import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { GitTree, GitTreeLoadMatch, GitTreeCreateData } from '../GithubTypes';
declare class GitTreeEntity extends GithubEntityBase<GitTree> {
    constructor(client: GithubSDK, entopts: any);
    make(this: GitTreeEntity): GitTreeEntity;
    load(this: any, reqmatch?: GitTreeLoadMatch, ctrl?: Control): Promise<GitTreeEntity>;
    create(this: any, reqdata?: GitTreeCreateData, ctrl?: Control): Promise<GitTreeEntity>;
}
export { GitTreeEntity };
