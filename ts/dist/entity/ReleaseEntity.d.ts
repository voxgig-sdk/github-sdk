import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Release, ReleaseLoadMatch, ReleaseListMatch, ReleaseCreateData, ReleaseUpdateData } from '../GithubTypes';
declare class ReleaseEntity extends GithubEntityBase<Release> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ReleaseEntity): ReleaseEntity;
    load(this: any, reqmatch?: ReleaseLoadMatch, ctrl?: Control): Promise<ReleaseEntity>;
    list(this: any, reqmatch?: ReleaseListMatch, ctrl?: Control): Promise<ReleaseEntity[]>;
    create(this: any, reqdata?: ReleaseCreateData, ctrl?: Control): Promise<ReleaseEntity>;
    update(this: any, reqdata?: ReleaseUpdateData, ctrl?: Control): Promise<ReleaseEntity>;
}
export { ReleaseEntity };
