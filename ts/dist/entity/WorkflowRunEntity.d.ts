import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { WorkflowRun, WorkflowRunLoadMatch, WorkflowRunCreateData } from '../GithubTypes';
declare class WorkflowRunEntity extends GithubEntityBase<WorkflowRun> {
    constructor(client: GithubSDK, entopts: any);
    make(this: WorkflowRunEntity): WorkflowRunEntity;
    load(this: any, reqmatch?: WorkflowRunLoadMatch, ctrl?: Control): Promise<WorkflowRunEntity>;
    create(this: any, reqdata?: WorkflowRunCreateData, ctrl?: Control): Promise<WorkflowRunEntity>;
}
export { WorkflowRunEntity };
