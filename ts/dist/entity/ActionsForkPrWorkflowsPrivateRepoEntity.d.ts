import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ActionsForkPrWorkflowsPrivateRepo, ActionsForkPrWorkflowsPrivateRepoLoadMatch } from '../GithubTypes';
declare class ActionsForkPrWorkflowsPrivateRepoEntity extends GithubEntityBase<ActionsForkPrWorkflowsPrivateRepo> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ActionsForkPrWorkflowsPrivateRepoEntity): ActionsForkPrWorkflowsPrivateRepoEntity;
    load(this: any, reqmatch?: ActionsForkPrWorkflowsPrivateRepoLoadMatch, ctrl?: Control): Promise<ActionsForkPrWorkflowsPrivateRepoEntity>;
}
export { ActionsForkPrWorkflowsPrivateRepoEntity };
