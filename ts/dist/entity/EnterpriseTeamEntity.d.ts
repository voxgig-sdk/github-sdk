import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { EnterpriseTeam, EnterpriseTeamLoadMatch, EnterpriseTeamListMatch, EnterpriseTeamCreateData, EnterpriseTeamUpdateData, EnterpriseTeamRemoveMatch } from '../GithubTypes';
declare class EnterpriseTeamEntity extends GithubEntityBase<EnterpriseTeam> {
    constructor(client: GithubSDK, entopts: any);
    make(this: EnterpriseTeamEntity): EnterpriseTeamEntity;
    load(this: any, reqmatch?: EnterpriseTeamLoadMatch, ctrl?: Control): Promise<EnterpriseTeamEntity>;
    list(this: any, reqmatch?: EnterpriseTeamListMatch, ctrl?: Control): Promise<EnterpriseTeamEntity[]>;
    create(this: any, reqdata?: EnterpriseTeamCreateData, ctrl?: Control): Promise<EnterpriseTeamEntity>;
    update(this: any, reqdata?: EnterpriseTeamUpdateData, ctrl?: Control): Promise<EnterpriseTeamEntity>;
    remove(this: any, reqmatch?: EnterpriseTeamRemoveMatch, ctrl?: Control): Promise<EnterpriseTeamEntity>;
}
export { EnterpriseTeamEntity };
