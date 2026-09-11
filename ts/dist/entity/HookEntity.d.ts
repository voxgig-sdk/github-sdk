import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Hook, HookLoadMatch, HookListMatch, HookCreateData, HookUpdateData } from '../GithubTypes';
declare class HookEntity extends GithubEntityBase<Hook> {
    constructor(client: GithubSDK, entopts: any);
    make(this: HookEntity): HookEntity;
    load(this: any, reqmatch?: HookLoadMatch, ctrl?: Control): Promise<HookEntity>;
    list(this: any, reqmatch?: HookListMatch, ctrl?: Control): Promise<HookEntity[]>;
    create(this: any, reqdata?: HookCreateData, ctrl?: Control): Promise<HookEntity>;
    update(this: any, reqdata?: HookUpdateData, ctrl?: Control): Promise<HookEntity>;
}
export { HookEntity };
