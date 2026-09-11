import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { RepositoryRuleDetailed, RepositoryRuleDetailedLoadMatch } from '../GithubTypes';
declare class RepositoryRuleDetailedEntity extends GithubEntityBase<RepositoryRuleDetailed> {
    constructor(client: GithubSDK, entopts: any);
    make(this: RepositoryRuleDetailedEntity): RepositoryRuleDetailedEntity;
    load(this: any, reqmatch?: RepositoryRuleDetailedLoadMatch, ctrl?: Control): Promise<RepositoryRuleDetailedEntity>;
}
export { RepositoryRuleDetailedEntity };
