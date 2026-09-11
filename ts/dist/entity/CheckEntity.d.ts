import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Check, CheckListMatch } from '../GithubTypes';
declare class CheckEntity extends GithubEntityBase<Check> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CheckEntity): CheckEntity;
    list(this: any, reqmatch?: CheckListMatch, ctrl?: Control): Promise<CheckEntity[]>;
}
export { CheckEntity };
