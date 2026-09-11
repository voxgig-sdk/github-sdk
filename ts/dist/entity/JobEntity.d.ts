import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Job, JobLoadMatch } from '../GithubTypes';
declare class JobEntity extends GithubEntityBase<Job> {
    constructor(client: GithubSDK, entopts: any);
    make(this: JobEntity): JobEntity;
    load(this: any, reqmatch?: JobLoadMatch, ctrl?: Control): Promise<JobEntity>;
}
export { JobEntity };
