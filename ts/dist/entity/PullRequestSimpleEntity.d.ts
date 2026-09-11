import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { PullRequestSimple, PullRequestSimpleCreateData, PullRequestSimpleRemoveMatch } from '../GithubTypes';
declare class PullRequestSimpleEntity extends GithubEntityBase<PullRequestSimple> {
    constructor(client: GithubSDK, entopts: any);
    make(this: PullRequestSimpleEntity): PullRequestSimpleEntity;
    create(this: any, reqdata?: PullRequestSimpleCreateData, ctrl?: Control): Promise<PullRequestSimpleEntity>;
    remove(this: any, reqmatch?: PullRequestSimpleRemoveMatch, ctrl?: Control): Promise<PullRequestSimpleEntity>;
}
export { PullRequestSimpleEntity };
