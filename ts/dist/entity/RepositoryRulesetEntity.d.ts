import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { RepositoryRuleset, RepositoryRulesetLoadMatch, RepositoryRulesetListMatch, RepositoryRulesetCreateData, RepositoryRulesetUpdateData } from '../GithubTypes';
declare class RepositoryRulesetEntity extends GithubEntityBase<RepositoryRuleset> {
    constructor(client: GithubSDK, entopts: any);
    make(this: RepositoryRulesetEntity): RepositoryRulesetEntity;
    load(this: any, reqmatch?: RepositoryRulesetLoadMatch, ctrl?: Control): Promise<RepositoryRulesetEntity>;
    list(this: any, reqmatch?: RepositoryRulesetListMatch, ctrl?: Control): Promise<RepositoryRulesetEntity[]>;
    create(this: any, reqdata?: RepositoryRulesetCreateData, ctrl?: Control): Promise<RepositoryRulesetEntity>;
    update(this: any, reqdata?: RepositoryRulesetUpdateData, ctrl?: Control): Promise<RepositoryRulesetEntity>;
}
export { RepositoryRulesetEntity };
