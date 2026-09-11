import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CheckRun, CheckRunLoadMatch, CheckRunCreateData, CheckRunUpdateData } from '../GithubTypes';
declare class CheckRunEntity extends GithubEntityBase<CheckRun> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CheckRunEntity): CheckRunEntity;
    load(this: any, reqmatch?: CheckRunLoadMatch, ctrl?: Control): Promise<CheckRunEntity>;
    create(this: any, reqdata?: CheckRunCreateData, ctrl?: Control): Promise<CheckRunEntity>;
    update(this: any, reqdata?: CheckRunUpdateData, ctrl?: Control): Promise<CheckRunEntity>;
}
export { CheckRunEntity };
