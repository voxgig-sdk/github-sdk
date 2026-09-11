import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Dependabot, DependabotListMatch, DependabotUpdateData, DependabotRemoveMatch } from '../GithubTypes';
declare class DependabotEntity extends GithubEntityBase<Dependabot> {
    constructor(client: GithubSDK, entopts: any);
    make(this: DependabotEntity): DependabotEntity;
    list(this: any, reqmatch?: DependabotListMatch, ctrl?: Control): Promise<DependabotEntity[]>;
    update(this: any, reqdata?: DependabotUpdateData, ctrl?: Control): Promise<DependabotEntity>;
    remove(this: any, reqmatch?: DependabotRemoveMatch, ctrl?: Control): Promise<DependabotEntity>;
}
export { DependabotEntity };
