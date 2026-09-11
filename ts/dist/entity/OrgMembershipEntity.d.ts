import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { OrgMembership, OrgMembershipLoadMatch, OrgMembershipUpdateData } from '../GithubTypes';
declare class OrgMembershipEntity extends GithubEntityBase<OrgMembership> {
    constructor(client: GithubSDK, entopts: any);
    make(this: OrgMembershipEntity): OrgMembershipEntity;
    load(this: any, reqmatch?: OrgMembershipLoadMatch, ctrl?: Control): Promise<OrgMembershipEntity>;
    update(this: any, reqdata?: OrgMembershipUpdateData, ctrl?: Control): Promise<OrgMembershipEntity>;
}
export { OrgMembershipEntity };
