import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { RateLimit, RateLimitLoadMatch } from '../GithubTypes';
declare class RateLimitEntity extends GithubEntityBase<RateLimit> {
    constructor(client: GithubSDK, entopts: any);
    make(this: RateLimitEntity): RateLimitEntity;
    load(this: any, reqmatch?: RateLimitLoadMatch, ctrl?: Control): Promise<RateLimitEntity>;
}
export { RateLimitEntity };
