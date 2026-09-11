import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CodeScanningAutofixCommit, CodeScanningAutofixCommitCreateData } from '../GithubTypes';
declare class CodeScanningAutofixCommitEntity extends GithubEntityBase<CodeScanningAutofixCommit> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CodeScanningAutofixCommitEntity): CodeScanningAutofixCommitEntity;
    create(this: any, reqdata?: CodeScanningAutofixCommitCreateData, ctrl?: Control): Promise<CodeScanningAutofixCommitEntity>;
}
export { CodeScanningAutofixCommitEntity };
