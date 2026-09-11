import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CommunityProfile, CommunityProfileLoadMatch } from '../GithubTypes';
declare class CommunityProfileEntity extends GithubEntityBase<CommunityProfile> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CommunityProfileEntity): CommunityProfileEntity;
    load(this: any, reqmatch?: CommunityProfileLoadMatch, ctrl?: Control): Promise<CommunityProfileEntity>;
}
export { CommunityProfileEntity };
