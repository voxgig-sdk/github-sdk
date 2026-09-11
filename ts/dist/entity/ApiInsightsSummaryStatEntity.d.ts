import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ApiInsightsSummaryStat, ApiInsightsSummaryStatLoadMatch } from '../GithubTypes';
declare class ApiInsightsSummaryStatEntity extends GithubEntityBase<ApiInsightsSummaryStat> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ApiInsightsSummaryStatEntity): ApiInsightsSummaryStatEntity;
    load(this: any, reqmatch?: ApiInsightsSummaryStatLoadMatch, ctrl?: Control): Promise<ApiInsightsSummaryStatEntity>;
}
export { ApiInsightsSummaryStatEntity };
