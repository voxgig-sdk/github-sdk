import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Follower, FollowerListMatch } from '../GithubTypes';
declare class FollowerEntity extends GithubEntityBase<Follower> {
    constructor(client: GithubSDK, entopts: any);
    make(this: FollowerEntity): FollowerEntity;
    list(this: any, reqmatch?: FollowerListMatch, ctrl?: Control): Promise<FollowerEntity[]>;
}
export { FollowerEntity };
