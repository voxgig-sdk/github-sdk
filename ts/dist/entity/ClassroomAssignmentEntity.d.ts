import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ClassroomAssignment, ClassroomAssignmentLoadMatch } from '../GithubTypes';
declare class ClassroomAssignmentEntity extends GithubEntityBase<ClassroomAssignment> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ClassroomAssignmentEntity): ClassroomAssignmentEntity;
    load(this: any, reqmatch?: ClassroomAssignmentLoadMatch, ctrl?: Control): Promise<ClassroomAssignmentEntity>;
}
export { ClassroomAssignmentEntity };
