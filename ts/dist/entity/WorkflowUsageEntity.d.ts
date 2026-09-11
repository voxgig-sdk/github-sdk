import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { WorkflowUsage, WorkflowUsageLoadMatch } from '../GithubTypes';
declare class WorkflowUsageEntity extends GithubEntityBase<WorkflowUsage> {
    constructor(client: GithubSDK, entopts: any);
    make(this: WorkflowUsageEntity): WorkflowUsageEntity;
    load(this: any, reqmatch?: WorkflowUsageLoadMatch, ctrl?: Control): Promise<WorkflowUsageEntity>;
}
export { WorkflowUsageEntity };
