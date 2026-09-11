import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { MinimalRepository, MinimalRepositoryListMatch } from '../GithubTypes';
declare class MinimalRepositoryEntity extends GithubEntityBase<MinimalRepository> {
    constructor(client: GithubSDK, entopts: any);
    make(this: MinimalRepositoryEntity): MinimalRepositoryEntity;
    list(this: any, reqmatch?: MinimalRepositoryListMatch, ctrl?: Control): Promise<MinimalRepositoryEntity[]>;
}
export { MinimalRepositoryEntity };
