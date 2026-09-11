import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CombinedCommitStatus, CombinedCommitStatusListMatch } from '../GithubTypes';
declare class CombinedCommitStatusEntity extends GithubEntityBase<CombinedCommitStatus> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CombinedCommitStatusEntity): CombinedCommitStatusEntity;
    list(this: any, reqmatch?: CombinedCommitStatusListMatch, ctrl?: Control): Promise<CombinedCommitStatusEntity[]>;
}
export { CombinedCommitStatusEntity };
