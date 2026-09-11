import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { OrgHook, OrgHookLoadMatch, OrgHookListMatch, OrgHookCreateData, OrgHookUpdateData } from '../GithubTypes';
declare class OrgHookEntity extends GithubEntityBase<OrgHook> {
    constructor(client: GithubSDK, entopts: any);
    make(this: OrgHookEntity): OrgHookEntity;
    load(this: any, reqmatch?: OrgHookLoadMatch, ctrl?: Control): Promise<OrgHookEntity>;
    list(this: any, reqmatch?: OrgHookListMatch, ctrl?: Control): Promise<OrgHookEntity[]>;
    create(this: any, reqdata?: OrgHookCreateData, ctrl?: Control): Promise<OrgHookEntity>;
    update(this: any, reqdata?: OrgHookUpdateData, ctrl?: Control): Promise<OrgHookEntity>;
}
export { OrgHookEntity };
