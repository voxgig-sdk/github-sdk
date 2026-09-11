import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CheckAutomatedSecurityFix, CheckAutomatedSecurityFixLoadMatch } from '../GithubTypes';
declare class CheckAutomatedSecurityFixEntity extends GithubEntityBase<CheckAutomatedSecurityFix> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CheckAutomatedSecurityFixEntity): CheckAutomatedSecurityFixEntity;
    load(this: any, reqmatch?: CheckAutomatedSecurityFixLoadMatch, ctrl?: Control): Promise<CheckAutomatedSecurityFixEntity>;
}
export { CheckAutomatedSecurityFixEntity };
