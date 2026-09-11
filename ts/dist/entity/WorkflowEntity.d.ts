import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Workflow, WorkflowLoadMatch, WorkflowUpdateData } from '../GithubTypes';
declare class WorkflowEntity extends GithubEntityBase<Workflow> {
    constructor(client: GithubSDK, entopts: any);
    make(this: WorkflowEntity): WorkflowEntity;
    load(this: any, reqmatch?: WorkflowLoadMatch, ctrl?: Control): Promise<WorkflowEntity>;
    update(this: any, reqdata?: WorkflowUpdateData, ctrl?: Control): Promise<WorkflowEntity>;
}
export { WorkflowEntity };
