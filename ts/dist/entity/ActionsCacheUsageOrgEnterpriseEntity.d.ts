import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ActionsCacheUsageOrgEnterprise, ActionsCacheUsageOrgEnterpriseLoadMatch } from '../GithubTypes';
declare class ActionsCacheUsageOrgEnterpriseEntity extends GithubEntityBase<ActionsCacheUsageOrgEnterprise> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ActionsCacheUsageOrgEnterpriseEntity): ActionsCacheUsageOrgEnterpriseEntity;
    load(this: any, reqmatch?: ActionsCacheUsageOrgEnterpriseLoadMatch, ctrl?: Control): Promise<ActionsCacheUsageOrgEnterpriseEntity>;
}
export { ActionsCacheUsageOrgEnterpriseEntity };
