import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Feed, FeedListMatch } from '../GithubTypes';
declare class FeedEntity extends GithubEntityBase<Feed> {
    constructor(client: GithubSDK, entopts: any);
    make(this: FeedEntity): FeedEntity;
    list(this: any, reqmatch?: FeedListMatch, ctrl?: Control): Promise<FeedEntity[]>;
}
export { FeedEntity };
