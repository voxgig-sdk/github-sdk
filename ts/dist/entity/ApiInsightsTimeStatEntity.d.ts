import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ApiInsightsTimeStat, ApiInsightsTimeStatLoadMatch, ApiInsightsTimeStatListMatch } from '../GithubTypes';
declare class ApiInsightsTimeStatEntity extends GithubEntityBase<ApiInsightsTimeStat> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ApiInsightsTimeStatEntity): ApiInsightsTimeStatEntity;
    load(this: any, reqmatch?: ApiInsightsTimeStatLoadMatch, ctrl?: Control): Promise<ApiInsightsTimeStatEntity>;
    list(this: any, reqmatch?: ApiInsightsTimeStatListMatch, ctrl?: Control): Promise<ApiInsightsTimeStatEntity[]>;
}
export { ApiInsightsTimeStatEntity };
