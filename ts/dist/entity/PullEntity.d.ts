import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Pull, PullLoadMatch, PullListMatch, PullCreateData, PullUpdateData, PullRemoveMatch } from '../GithubTypes';
declare class PullEntity extends GithubEntityBase<Pull> {
    constructor(client: GithubSDK, entopts: any);
    make(this: PullEntity): PullEntity;
    load(this: any, reqmatch?: PullLoadMatch, ctrl?: Control): Promise<PullEntity>;
    list(this: any, reqmatch?: PullListMatch, ctrl?: Control): Promise<PullEntity[]>;
    create(this: any, reqdata?: PullCreateData, ctrl?: Control): Promise<PullEntity>;
    update(this: any, reqdata?: PullUpdateData, ctrl?: Control): Promise<PullEntity>;
    remove(this: any, reqmatch?: PullRemoveMatch, ctrl?: Control): Promise<PullEntity>;
}
export { PullEntity };
