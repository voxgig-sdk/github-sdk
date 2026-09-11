import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { BillingUsageReportUser, BillingUsageReportUserListMatch } from '../GithubTypes';
declare class BillingUsageReportUserEntity extends GithubEntityBase<BillingUsageReportUser> {
    constructor(client: GithubSDK, entopts: any);
    make(this: BillingUsageReportUserEntity): BillingUsageReportUserEntity;
    list(this: any, reqmatch?: BillingUsageReportUserListMatch, ctrl?: Control): Promise<BillingUsageReportUserEntity[]>;
}
export { BillingUsageReportUserEntity };
