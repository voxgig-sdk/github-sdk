import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { SelfHostedRunner, SelfHostedRunnerLoadMatch } from '../GithubTypes';
declare class SelfHostedRunnerEntity extends GithubEntityBase<SelfHostedRunner> {
    constructor(client: GithubSDK, entopts: any);
    make(this: SelfHostedRunnerEntity): SelfHostedRunnerEntity;
    load(this: any, reqmatch?: SelfHostedRunnerLoadMatch, ctrl?: Control): Promise<SelfHostedRunnerEntity>;
}
export { SelfHostedRunnerEntity };
