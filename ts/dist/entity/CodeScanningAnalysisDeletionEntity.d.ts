import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CodeScanningAnalysisDeletion, CodeScanningAnalysisDeletionRemoveMatch } from '../GithubTypes';
declare class CodeScanningAnalysisDeletionEntity extends GithubEntityBase<CodeScanningAnalysisDeletion> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CodeScanningAnalysisDeletionEntity): CodeScanningAnalysisDeletionEntity;
    remove(this: any, reqmatch?: CodeScanningAnalysisDeletionRemoveMatch, ctrl?: Control): Promise<CodeScanningAnalysisDeletionEntity>;
}
export { CodeScanningAnalysisDeletionEntity };
