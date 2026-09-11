import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ApiInsightsRouteStat, ApiInsightsRouteStatListMatch } from '../GithubTypes';
declare class ApiInsightsRouteStatEntity extends GithubEntityBase<ApiInsightsRouteStat> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ApiInsightsRouteStatEntity): ApiInsightsRouteStatEntity;
    list(this: any, reqmatch?: ApiInsightsRouteStatListMatch, ctrl?: Control): Promise<ApiInsightsRouteStatEntity[]>;
}
export { ApiInsightsRouteStatEntity };
