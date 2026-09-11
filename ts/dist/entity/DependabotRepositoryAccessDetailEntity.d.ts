import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { DependabotRepositoryAccessDetail, DependabotRepositoryAccessDetailListMatch } from '../GithubTypes';
declare class DependabotRepositoryAccessDetailEntity extends GithubEntityBase<DependabotRepositoryAccessDetail> {
    constructor(client: GithubSDK, entopts: any);
    make(this: DependabotRepositoryAccessDetailEntity): DependabotRepositoryAccessDetailEntity;
    list(this: any, reqmatch?: DependabotRepositoryAccessDetailListMatch, ctrl?: Control): Promise<DependabotRepositoryAccessDetailEntity[]>;
}
export { DependabotRepositoryAccessDetailEntity };
