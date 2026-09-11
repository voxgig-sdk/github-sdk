import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { View, ViewListMatch } from '../GithubTypes';
declare class ViewEntity extends GithubEntityBase<View> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ViewEntity): ViewEntity;
    list(this: any, reqmatch?: ViewListMatch, ctrl?: Control): Promise<ViewEntity[]>;
}
export { ViewEntity };
