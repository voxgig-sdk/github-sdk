import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Membership, MembershipLoadMatch, MembershipListMatch, MembershipUpdateData } from '../GithubTypes';
declare class MembershipEntity extends GithubEntityBase<Membership> {
    constructor(client: GithubSDK, entopts: any);
    make(this: MembershipEntity): MembershipEntity;
    load(this: any, reqmatch?: MembershipLoadMatch, ctrl?: Control): Promise<MembershipEntity>;
    list(this: any, reqmatch?: MembershipListMatch, ctrl?: Control): Promise<MembershipEntity[]>;
    update(this: any, reqdata?: MembershipUpdateData, ctrl?: Control): Promise<MembershipEntity>;
}
export { MembershipEntity };
