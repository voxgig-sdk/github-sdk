import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Clone, CloneListMatch } from '../GithubTypes';
declare class CloneEntity extends GithubEntityBase<Clone> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CloneEntity): CloneEntity;
    list(this: any, reqmatch?: CloneListMatch, ctrl?: Control): Promise<CloneEntity[]>;
}
export { CloneEntity };
