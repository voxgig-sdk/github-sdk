import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { WorkflowRunUsage, WorkflowRunUsageLoadMatch } from '../GithubTypes';
declare class WorkflowRunUsageEntity extends GithubEntityBase<WorkflowRunUsage> {
    constructor(client: GithubSDK, entopts: any);
    make(this: WorkflowRunUsageEntity): WorkflowRunUsageEntity;
    load(this: any, reqmatch?: WorkflowRunUsageLoadMatch, ctrl?: Control): Promise<WorkflowRunUsageEntity>;
}
export { WorkflowRunUsageEntity };
