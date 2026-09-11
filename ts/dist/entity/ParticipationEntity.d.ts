import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Participation, ParticipationListMatch } from '../GithubTypes';
declare class ParticipationEntity extends GithubEntityBase<Participation> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ParticipationEntity): ParticipationEntity;
    list(this: any, reqmatch?: ParticipationListMatch, ctrl?: Control): Promise<ParticipationEntity[]>;
}
export { ParticipationEntity };
