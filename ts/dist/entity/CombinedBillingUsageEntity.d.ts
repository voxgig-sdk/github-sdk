import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CombinedBillingUsage, CombinedBillingUsageLoadMatch } from '../GithubTypes';
declare class CombinedBillingUsageEntity extends GithubEntityBase<CombinedBillingUsage> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CombinedBillingUsageEntity): CombinedBillingUsageEntity;
    load(this: any, reqmatch?: CombinedBillingUsageLoadMatch, ctrl?: Control): Promise<CombinedBillingUsageEntity>;
}
export { CombinedBillingUsageEntity };
