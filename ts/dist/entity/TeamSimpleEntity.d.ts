import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { TeamSimple, TeamSimpleListMatch } from '../GithubTypes';
declare class TeamSimpleEntity extends GithubEntityBase<TeamSimple> {
    constructor(client: GithubSDK, entopts: any);
    make(this: TeamSimpleEntity): TeamSimpleEntity;
    list(this: any, reqmatch?: TeamSimpleListMatch, ctrl?: Control): Promise<TeamSimpleEntity[]>;
}
export { TeamSimpleEntity };
