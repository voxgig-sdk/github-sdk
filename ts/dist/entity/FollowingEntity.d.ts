import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Following, FollowingListMatch } from '../GithubTypes';
declare class FollowingEntity extends GithubEntityBase<Following> {
    constructor(client: GithubSDK, entopts: any);
    make(this: FollowingEntity): FollowingEntity;
    list(this: any, reqmatch?: FollowingListMatch, ctrl?: Control): Promise<FollowingEntity[]>;
}
export { FollowingEntity };
