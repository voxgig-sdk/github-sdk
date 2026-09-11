import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ActionsHostedRunner, ActionsHostedRunnerLoadMatch, ActionsHostedRunnerCreateData, ActionsHostedRunnerUpdateData } from '../GithubTypes';
declare class ActionsHostedRunnerEntity extends GithubEntityBase<ActionsHostedRunner> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ActionsHostedRunnerEntity): ActionsHostedRunnerEntity;
    load(this: any, reqmatch?: ActionsHostedRunnerLoadMatch, ctrl?: Control): Promise<ActionsHostedRunnerEntity>;
    create(this: any, reqdata?: ActionsHostedRunnerCreateData, ctrl?: Control): Promise<ActionsHostedRunnerEntity>;
    update(this: any, reqdata?: ActionsHostedRunnerUpdateData, ctrl?: Control): Promise<ActionsHostedRunnerEntity>;
}
export { ActionsHostedRunnerEntity };
