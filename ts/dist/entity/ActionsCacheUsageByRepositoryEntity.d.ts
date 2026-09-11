import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ActionsCacheUsageByRepository, ActionsCacheUsageByRepositoryLoadMatch } from '../GithubTypes';
declare class ActionsCacheUsageByRepositoryEntity extends GithubEntityBase<ActionsCacheUsageByRepository> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ActionsCacheUsageByRepositoryEntity): ActionsCacheUsageByRepositoryEntity;
    load(this: any, reqmatch?: ActionsCacheUsageByRepositoryLoadMatch, ctrl?: Control): Promise<ActionsCacheUsageByRepositoryEntity>;
}
export { ActionsCacheUsageByRepositoryEntity };
