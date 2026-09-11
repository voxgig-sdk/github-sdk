import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ClassroomAcceptedAssignment, ClassroomAcceptedAssignmentListMatch } from '../GithubTypes';
declare class ClassroomAcceptedAssignmentEntity extends GithubEntityBase<ClassroomAcceptedAssignment> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ClassroomAcceptedAssignmentEntity): ClassroomAcceptedAssignmentEntity;
    list(this: any, reqmatch?: ClassroomAcceptedAssignmentListMatch, ctrl?: Control): Promise<ClassroomAcceptedAssignmentEntity[]>;
}
export { ClassroomAcceptedAssignmentEntity };
