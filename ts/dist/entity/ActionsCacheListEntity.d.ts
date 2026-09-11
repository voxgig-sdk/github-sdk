import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ActionsCacheList, ActionsCacheListListMatch, ActionsCacheListRemoveMatch } from '../GithubTypes';
declare class ActionsCacheListEntity extends GithubEntityBase<ActionsCacheList> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ActionsCacheListEntity): ActionsCacheListEntity;
    list(this: any, reqmatch?: ActionsCacheListListMatch, ctrl?: Control): Promise<ActionsCacheListEntity[]>;
    remove(this: any, reqmatch?: ActionsCacheListRemoveMatch, ctrl?: Control): Promise<ActionsCacheListEntity>;
}
export { ActionsCacheListEntity };
