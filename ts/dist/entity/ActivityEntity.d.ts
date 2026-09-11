import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Activity, ActivityLoadMatch, ActivityListMatch, ActivityUpdateData, ActivityRemoveMatch } from '../GithubTypes';
declare class ActivityEntity extends GithubEntityBase<Activity> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ActivityEntity): ActivityEntity;
    load(this: any, reqmatch?: ActivityLoadMatch, ctrl?: Control): Promise<ActivityEntity>;
    list(this: any, reqmatch?: ActivityListMatch, ctrl?: Control): Promise<ActivityEntity[]>;
    update(this: any, reqdata?: ActivityUpdateData, ctrl?: Control): Promise<ActivityEntity>;
    remove(this: any, reqmatch?: ActivityRemoveMatch, ctrl?: Control): Promise<ActivityEntity>;
}
export { ActivityEntity };
