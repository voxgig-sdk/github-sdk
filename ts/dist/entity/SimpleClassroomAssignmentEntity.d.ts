import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { SimpleClassroomAssignment, SimpleClassroomAssignmentListMatch } from '../GithubTypes';
declare class SimpleClassroomAssignmentEntity extends GithubEntityBase<SimpleClassroomAssignment> {
    constructor(client: GithubSDK, entopts: any);
    make(this: SimpleClassroomAssignmentEntity): SimpleClassroomAssignmentEntity;
    list(this: any, reqmatch?: SimpleClassroomAssignmentListMatch, ctrl?: Control): Promise<SimpleClassroomAssignmentEntity[]>;
}
export { SimpleClassroomAssignmentEntity };
