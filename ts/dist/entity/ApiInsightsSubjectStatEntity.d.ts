import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ApiInsightsSubjectStat, ApiInsightsSubjectStatListMatch } from '../GithubTypes';
declare class ApiInsightsSubjectStatEntity extends GithubEntityBase<ApiInsightsSubjectStat> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ApiInsightsSubjectStatEntity): ApiInsightsSubjectStatEntity;
    list(this: any, reqmatch?: ApiInsightsSubjectStatListMatch, ctrl?: Control): Promise<ApiInsightsSubjectStatEntity[]>;
}
export { ApiInsightsSubjectStatEntity };
