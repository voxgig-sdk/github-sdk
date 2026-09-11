import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ActionsHostedRunnerLimit, ActionsHostedRunnerLimitLoadMatch } from '../GithubTypes';
declare class ActionsHostedRunnerLimitEntity extends GithubEntityBase<ActionsHostedRunnerLimit> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ActionsHostedRunnerLimitEntity): ActionsHostedRunnerLimitEntity;
    load(this: any, reqmatch?: ActionsHostedRunnerLimitLoadMatch, ctrl?: Control): Promise<ActionsHostedRunnerLimitEntity>;
}
export { ActionsHostedRunnerLimitEntity };
