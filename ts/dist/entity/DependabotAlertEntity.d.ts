import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { DependabotAlert, DependabotAlertLoadMatch, DependabotAlertListMatch, DependabotAlertUpdateData } from '../GithubTypes';
declare class DependabotAlertEntity extends GithubEntityBase<DependabotAlert> {
    constructor(client: GithubSDK, entopts: any);
    make(this: DependabotAlertEntity): DependabotAlertEntity;
    load(this: any, reqmatch?: DependabotAlertLoadMatch, ctrl?: Control): Promise<DependabotAlertEntity>;
    list(this: any, reqmatch?: DependabotAlertListMatch, ctrl?: Control): Promise<DependabotAlertEntity[]>;
    update(this: any, reqdata?: DependabotAlertUpdateData, ctrl?: Control): Promise<DependabotAlertEntity>;
}
export { DependabotAlertEntity };
