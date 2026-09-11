import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { EnterpriseTeamMembership, EnterpriseTeamMembershipRemoveMatch } from '../GithubTypes';
declare class EnterpriseTeamMembershipEntity extends GithubEntityBase<EnterpriseTeamMembership> {
    constructor(client: GithubSDK, entopts: any);
    make(this: EnterpriseTeamMembershipEntity): EnterpriseTeamMembershipEntity;
    remove(this: any, reqmatch?: EnterpriseTeamMembershipRemoveMatch, ctrl?: Control): Promise<EnterpriseTeamMembershipEntity>;
}
export { EnterpriseTeamMembershipEntity };
