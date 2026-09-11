import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Repository, RepositoryListMatch } from '../GithubTypes';
declare class RepositoryEntity extends GithubEntityBase<Repository> {
    constructor(client: GithubSDK, entopts: any);
    make(this: RepositoryEntity): RepositoryEntity;
    list(this: any, reqmatch?: RepositoryListMatch, ctrl?: Control): Promise<RepositoryEntity[]>;
}
export { RepositoryEntity };
