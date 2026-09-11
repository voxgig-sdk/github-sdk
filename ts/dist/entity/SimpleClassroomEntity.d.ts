import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { SimpleClassroom } from '../GithubTypes';
declare class SimpleClassroomEntity extends GithubEntityBase<SimpleClassroom> {
    constructor(client: GithubSDK, entopts: any);
    make(this: SimpleClassroomEntity): SimpleClassroomEntity;
}
export { SimpleClassroomEntity };
