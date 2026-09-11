import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { FileCommit, FileCommitUpdateData, FileCommitRemoveMatch } from '../GithubTypes';
declare class FileCommitEntity extends GithubEntityBase<FileCommit> {
    constructor(client: GithubSDK, entopts: any);
    make(this: FileCommitEntity): FileCommitEntity;
    update(this: any, reqdata?: FileCommitUpdateData, ctrl?: Control): Promise<FileCommitEntity>;
    remove(this: any, reqmatch?: FileCommitRemoveMatch, ctrl?: Control): Promise<FileCommitEntity>;
}
export { FileCommitEntity };
