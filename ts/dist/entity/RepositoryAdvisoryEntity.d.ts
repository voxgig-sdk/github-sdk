import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { RepositoryAdvisory, RepositoryAdvisoryLoadMatch, RepositoryAdvisoryListMatch, RepositoryAdvisoryCreateData, RepositoryAdvisoryUpdateData } from '../GithubTypes';
declare class RepositoryAdvisoryEntity extends GithubEntityBase<RepositoryAdvisory> {
    constructor(client: GithubSDK, entopts: any);
    make(this: RepositoryAdvisoryEntity): RepositoryAdvisoryEntity;
    load(this: any, reqmatch?: RepositoryAdvisoryLoadMatch, ctrl?: Control): Promise<RepositoryAdvisoryEntity>;
    list(this: any, reqmatch?: RepositoryAdvisoryListMatch, ctrl?: Control): Promise<RepositoryAdvisoryEntity[]>;
    create(this: any, reqdata?: RepositoryAdvisoryCreateData, ctrl?: Control): Promise<RepositoryAdvisoryEntity>;
    update(this: any, reqdata?: RepositoryAdvisoryUpdateData, ctrl?: Control): Promise<RepositoryAdvisoryEntity>;
}
export { RepositoryAdvisoryEntity };
