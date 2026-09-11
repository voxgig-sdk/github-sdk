import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { RunnerApplication, RunnerApplicationListMatch } from '../GithubTypes';
declare class RunnerApplicationEntity extends GithubEntityBase<RunnerApplication> {
    constructor(client: GithubSDK, entopts: any);
    make(this: RunnerApplicationEntity): RunnerApplicationEntity;
    list(this: any, reqmatch?: RunnerApplicationListMatch, ctrl?: Control): Promise<RunnerApplicationEntity[]>;
}
export { RunnerApplicationEntity };
