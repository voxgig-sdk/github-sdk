import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ClassroomAssignmentGrade, ClassroomAssignmentGradeListMatch } from '../GithubTypes';
declare class ClassroomAssignmentGradeEntity extends GithubEntityBase<ClassroomAssignmentGrade> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ClassroomAssignmentGradeEntity): ClassroomAssignmentGradeEntity;
    list(this: any, reqmatch?: ClassroomAssignmentGradeListMatch, ctrl?: Control): Promise<ClassroomAssignmentGradeEntity[]>;
}
export { ClassroomAssignmentGradeEntity };
