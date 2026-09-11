import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { RulesetVersion, RulesetVersionListMatch } from '../GithubTypes';
declare class RulesetVersionEntity extends GithubEntityBase<RulesetVersion> {
    constructor(client: GithubSDK, entopts: any);
    make(this: RulesetVersionEntity): RulesetVersionEntity;
    list(this: any, reqmatch?: RulesetVersionListMatch, ctrl?: Control): Promise<RulesetVersionEntity[]>;
}
export { RulesetVersionEntity };
