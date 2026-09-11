import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { RunnerGroup, RunnerGroupLoadMatch, RunnerGroupCreateData, RunnerGroupUpdateData } from '../GithubTypes';
declare class RunnerGroupEntity extends GithubEntityBase<RunnerGroup> {
    constructor(client: GithubSDK, entopts: any);
    make(this: RunnerGroupEntity): RunnerGroupEntity;
    load(this: any, reqmatch?: RunnerGroupLoadMatch, ctrl?: Control): Promise<RunnerGroupEntity>;
    create(this: any, reqdata?: RunnerGroupCreateData, ctrl?: Control): Promise<RunnerGroupEntity>;
    update(this: any, reqdata?: RunnerGroupUpdateData, ctrl?: Control): Promise<RunnerGroupEntity>;
}
export { RunnerGroupEntity };
