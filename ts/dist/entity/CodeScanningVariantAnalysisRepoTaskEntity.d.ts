import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CodeScanningVariantAnalysisRepoTask, CodeScanningVariantAnalysisRepoTaskLoadMatch } from '../GithubTypes';
declare class CodeScanningVariantAnalysisRepoTaskEntity extends GithubEntityBase<CodeScanningVariantAnalysisRepoTask> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CodeScanningVariantAnalysisRepoTaskEntity): CodeScanningVariantAnalysisRepoTaskEntity;
    load(this: any, reqmatch?: CodeScanningVariantAnalysisRepoTaskLoadMatch, ctrl?: Control): Promise<CodeScanningVariantAnalysisRepoTaskEntity>;
}
export { CodeScanningVariantAnalysisRepoTaskEntity };
