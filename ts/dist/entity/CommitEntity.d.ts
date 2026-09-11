import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Commit, CommitLoadMatch, CommitListMatch, CommitCreateData } from '../GithubTypes';
declare class CommitEntity extends GithubEntityBase<Commit> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CommitEntity): CommitEntity;
    load(this: any, reqmatch?: CommitLoadMatch, ctrl?: Control): Promise<CommitEntity>;
    list(this: any, reqmatch?: CommitListMatch, ctrl?: Control): Promise<CommitEntity[]>;
    create(this: any, reqdata?: CommitCreateData, ctrl?: Control): Promise<CommitEntity>;
}
export { CommitEntity };
