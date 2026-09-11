import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { DependabotAlertWithRepository, DependabotAlertWithRepositoryListMatch } from '../GithubTypes';
declare class DependabotAlertWithRepositoryEntity extends GithubEntityBase<DependabotAlertWithRepository> {
    constructor(client: GithubSDK, entopts: any);
    make(this: DependabotAlertWithRepositoryEntity): DependabotAlertWithRepositoryEntity;
    list(this: any, reqmatch?: DependabotAlertWithRepositoryListMatch, ctrl?: Control): Promise<DependabotAlertWithRepositoryEntity[]>;
}
export { DependabotAlertWithRepositoryEntity };
