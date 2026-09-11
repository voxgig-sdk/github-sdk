import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { BillingUsageReport, BillingUsageReportListMatch } from '../GithubTypes';
declare class BillingUsageReportEntity extends GithubEntityBase<BillingUsageReport> {
    constructor(client: GithubSDK, entopts: any);
    make(this: BillingUsageReportEntity): BillingUsageReportEntity;
    list(this: any, reqmatch?: BillingUsageReportListMatch, ctrl?: Control): Promise<BillingUsageReportEntity[]>;
}
export { BillingUsageReportEntity };
