import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { PagesHealthCheck, PagesHealthCheckLoadMatch } from '../GithubTypes';
declare class PagesHealthCheckEntity extends GithubEntityBase<PagesHealthCheck> {
    constructor(client: GithubSDK, entopts: any);
    make(this: PagesHealthCheckEntity): PagesHealthCheckEntity;
    load(this: any, reqmatch?: PagesHealthCheckLoadMatch, ctrl?: Control): Promise<PagesHealthCheckEntity>;
}
export { PagesHealthCheckEntity };
