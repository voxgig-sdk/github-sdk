import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { GitignoreTemplate, GitignoreTemplateLoadMatch } from '../GithubTypes';
declare class GitignoreTemplateEntity extends GithubEntityBase<GitignoreTemplate> {
    constructor(client: GithubSDK, entopts: any);
    make(this: GitignoreTemplateEntity): GitignoreTemplateEntity;
    load(this: any, reqmatch?: GitignoreTemplateLoadMatch, ctrl?: Control): Promise<GitignoreTemplateEntity>;
}
export { GitignoreTemplateEntity };
