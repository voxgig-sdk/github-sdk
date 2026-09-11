import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Milestone, MilestoneLoadMatch, MilestoneListMatch, MilestoneCreateData, MilestoneUpdateData } from '../GithubTypes';
declare class MilestoneEntity extends GithubEntityBase<Milestone> {
    constructor(client: GithubSDK, entopts: any);
    make(this: MilestoneEntity): MilestoneEntity;
    load(this: any, reqmatch?: MilestoneLoadMatch, ctrl?: Control): Promise<MilestoneEntity>;
    list(this: any, reqmatch?: MilestoneListMatch, ctrl?: Control): Promise<MilestoneEntity[]>;
    create(this: any, reqdata?: MilestoneCreateData, ctrl?: Control): Promise<MilestoneEntity>;
    update(this: any, reqdata?: MilestoneUpdateData, ctrl?: Control): Promise<MilestoneEntity>;
}
export { MilestoneEntity };
