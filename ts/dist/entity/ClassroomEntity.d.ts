import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Classroom, ClassroomLoadMatch, ClassroomListMatch } from '../GithubTypes';
declare class ClassroomEntity extends GithubEntityBase<Classroom> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ClassroomEntity): ClassroomEntity;
    load(this: any, reqmatch?: ClassroomLoadMatch, ctrl?: Control): Promise<ClassroomEntity>;
    list(this: any, reqmatch?: ClassroomListMatch, ctrl?: Control): Promise<ClassroomEntity[]>;
}
export { ClassroomEntity };
