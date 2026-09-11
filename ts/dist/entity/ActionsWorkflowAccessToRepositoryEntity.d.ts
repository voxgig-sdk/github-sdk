import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ActionsWorkflowAccessToRepository, ActionsWorkflowAccessToRepositoryLoadMatch } from '../GithubTypes';
declare class ActionsWorkflowAccessToRepositoryEntity extends GithubEntityBase<ActionsWorkflowAccessToRepository> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ActionsWorkflowAccessToRepositoryEntity): ActionsWorkflowAccessToRepositoryEntity;
    load(this: any, reqmatch?: ActionsWorkflowAccessToRepositoryLoadMatch, ctrl?: Control): Promise<ActionsWorkflowAccessToRepositoryEntity>;
}
export { ActionsWorkflowAccessToRepositoryEntity };
