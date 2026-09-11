import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Assignee, AssigneeListMatch } from '../GithubTypes';
declare class AssigneeEntity extends GithubEntityBase<Assignee> {
    constructor(client: GithubSDK, entopts: any);
    make(this: AssigneeEntity): AssigneeEntity;
    list(this: any, reqmatch?: AssigneeListMatch, ctrl?: Control): Promise<AssigneeEntity[]>;
}
export { AssigneeEntity };
