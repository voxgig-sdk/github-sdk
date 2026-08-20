import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Repo, RepoLoadMatch, RepoListMatch, RepoCreateData, RepoUpdateData, RepoRemoveMatch } from '../GithubTypes';
declare class RepoEntity extends GithubEntityBase<Repo> {
    constructor(client: GithubSDK, entopts: any);
    make(this: RepoEntity): RepoEntity;
    load(this: any, reqmatch?: RepoLoadMatch, ctrl?: Control): Promise<RepoEntity>;
    list(this: any, reqmatch?: RepoListMatch, ctrl?: Control): Promise<RepoEntity[]>;
    create(this: any, reqdata?: RepoCreateData, ctrl?: Control): Promise<RepoEntity>;
    update(this: any, reqdata?: RepoUpdateData, ctrl?: Control): Promise<RepoEntity>;
    remove(this: any, reqmatch?: RepoRemoveMatch, ctrl?: Control): Promise<RepoEntity>;
}
export { RepoEntity };
