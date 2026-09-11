import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { RulesetVersionWithState, RulesetVersionWithStateLoadMatch } from '../GithubTypes';
declare class RulesetVersionWithStateEntity extends GithubEntityBase<RulesetVersionWithState> {
    constructor(client: GithubSDK, entopts: any);
    make(this: RulesetVersionWithStateEntity): RulesetVersionWithStateEntity;
    load(this: any, reqmatch?: RulesetVersionWithStateLoadMatch, ctrl?: Control): Promise<RulesetVersionWithStateEntity>;
}
export { RulesetVersionWithStateEntity };
