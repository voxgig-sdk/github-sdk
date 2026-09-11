import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ApiOverview, ApiOverviewListMatch } from '../GithubTypes';
declare class ApiOverviewEntity extends GithubEntityBase<ApiOverview> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ApiOverviewEntity): ApiOverviewEntity;
    list(this: any, reqmatch?: ApiOverviewListMatch, ctrl?: Control): Promise<ApiOverviewEntity[]>;
}
export { ApiOverviewEntity };
