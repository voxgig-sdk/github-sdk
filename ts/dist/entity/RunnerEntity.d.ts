import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Runner, RunnerLoadMatch } from '../GithubTypes';
declare class RunnerEntity extends GithubEntityBase<Runner> {
    constructor(client: GithubSDK, entopts: any);
    make(this: RunnerEntity): RunnerEntity;
    load(this: any, reqmatch?: RunnerLoadMatch, ctrl?: Control): Promise<RunnerEntity>;
}
export { RunnerEntity };
