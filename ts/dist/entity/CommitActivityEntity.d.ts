import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CommitActivity, CommitActivityListMatch } from '../GithubTypes';
declare class CommitActivityEntity extends GithubEntityBase<CommitActivity> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CommitActivityEntity): CommitActivityEntity;
    list(this: any, reqmatch?: CommitActivityListMatch, ctrl?: Control): Promise<CommitActivityEntity[]>;
}
export { CommitActivityEntity };
