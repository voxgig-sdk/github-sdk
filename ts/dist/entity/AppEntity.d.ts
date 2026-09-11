import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { App, AppListMatch, AppCreateData, AppUpdateData, AppRemoveMatch } from '../GithubTypes';
declare class AppEntity extends GithubEntityBase<App> {
    constructor(client: GithubSDK, entopts: any);
    make(this: AppEntity): AppEntity;
    list(this: any, reqmatch?: AppListMatch, ctrl?: Control): Promise<AppEntity[]>;
    create(this: any, reqdata?: AppCreateData, ctrl?: Control): Promise<AppEntity>;
    update(this: any, reqdata?: AppUpdateData, ctrl?: Control): Promise<AppEntity>;
    remove(this: any, reqmatch?: AppRemoveMatch, ctrl?: Control): Promise<AppEntity>;
}
export { AppEntity };
