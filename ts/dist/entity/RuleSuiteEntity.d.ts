import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { RuleSuite, RuleSuiteLoadMatch, RuleSuiteListMatch } from '../GithubTypes';
declare class RuleSuiteEntity extends GithubEntityBase<RuleSuite> {
    constructor(client: GithubSDK, entopts: any);
    make(this: RuleSuiteEntity): RuleSuiteEntity;
    load(this: any, reqmatch?: RuleSuiteLoadMatch, ctrl?: Control): Promise<RuleSuiteEntity>;
    list(this: any, reqmatch?: RuleSuiteListMatch, ctrl?: Control): Promise<RuleSuiteEntity[]>;
}
export { RuleSuiteEntity };
