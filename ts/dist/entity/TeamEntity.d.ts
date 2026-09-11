import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Team, TeamLoadMatch, TeamListMatch, TeamCreateData, TeamUpdateData, TeamRemoveMatch } from '../GithubTypes';
declare class TeamEntity extends GithubEntityBase<Team> {
    constructor(client: GithubSDK, entopts: any);
    make(this: TeamEntity): TeamEntity;
    load(this: any, reqmatch?: TeamLoadMatch, ctrl?: Control): Promise<TeamEntity>;
    list(this: any, reqmatch?: TeamListMatch, ctrl?: Control): Promise<TeamEntity[]>;
    create(this: any, reqdata?: TeamCreateData, ctrl?: Control): Promise<TeamEntity>;
    update(this: any, reqdata?: TeamUpdateData, ctrl?: Control): Promise<TeamEntity>;
    remove(this: any, reqmatch?: TeamRemoveMatch, ctrl?: Control): Promise<TeamEntity>;
}
export { TeamEntity };
