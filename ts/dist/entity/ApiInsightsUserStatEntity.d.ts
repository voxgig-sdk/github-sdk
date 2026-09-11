import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ApiInsightsUserStat, ApiInsightsUserStatLoadMatch } from '../GithubTypes';
declare class ApiInsightsUserStatEntity extends GithubEntityBase<ApiInsightsUserStat> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ApiInsightsUserStatEntity): ApiInsightsUserStatEntity;
    load(this: any, reqmatch?: ApiInsightsUserStatLoadMatch, ctrl?: Control): Promise<ApiInsightsUserStatEntity>;
}
export { ApiInsightsUserStatEntity };
