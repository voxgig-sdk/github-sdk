import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { FullRepository, FullRepositoryLoadMatch, FullRepositoryCreateData, FullRepositoryUpdateData } from '../GithubTypes';
declare class FullRepositoryEntity extends GithubEntityBase<FullRepository> {
    constructor(client: GithubSDK, entopts: any);
    make(this: FullRepositoryEntity): FullRepositoryEntity;
    load(this: any, reqmatch?: FullRepositoryLoadMatch, ctrl?: Control): Promise<FullRepositoryEntity>;
    create(this: any, reqdata?: FullRepositoryCreateData, ctrl?: Control): Promise<FullRepositoryEntity>;
    update(this: any, reqdata?: FullRepositoryUpdateData, ctrl?: Control): Promise<FullRepositoryEntity>;
}
export { FullRepositoryEntity };
