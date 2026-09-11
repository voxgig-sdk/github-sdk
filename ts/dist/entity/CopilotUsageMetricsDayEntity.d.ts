import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CopilotUsageMetricsDay, CopilotUsageMetricsDayListMatch } from '../GithubTypes';
declare class CopilotUsageMetricsDayEntity extends GithubEntityBase<CopilotUsageMetricsDay> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CopilotUsageMetricsDayEntity): CopilotUsageMetricsDayEntity;
    list(this: any, reqmatch?: CopilotUsageMetricsDayListMatch, ctrl?: Control): Promise<CopilotUsageMetricsDayEntity[]>;
}
export { CopilotUsageMetricsDayEntity };
