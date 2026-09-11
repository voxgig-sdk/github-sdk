import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CheckSuite, CheckSuiteLoadMatch, CheckSuiteCreateData } from '../GithubTypes';
declare class CheckSuiteEntity extends GithubEntityBase<CheckSuite> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CheckSuiteEntity): CheckSuiteEntity;
    load(this: any, reqmatch?: CheckSuiteLoadMatch, ctrl?: Control): Promise<CheckSuiteEntity>;
    create(this: any, reqdata?: CheckSuiteCreateData, ctrl?: Control): Promise<CheckSuiteEntity>;
}
export { CheckSuiteEntity };
