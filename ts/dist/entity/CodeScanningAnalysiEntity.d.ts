import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CodeScanningAnalysi, CodeScanningAnalysiLoadMatch, CodeScanningAnalysiListMatch } from '../GithubTypes';
declare class CodeScanningAnalysiEntity extends GithubEntityBase<CodeScanningAnalysi> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CodeScanningAnalysiEntity): CodeScanningAnalysiEntity;
    load(this: any, reqmatch?: CodeScanningAnalysiLoadMatch, ctrl?: Control): Promise<CodeScanningAnalysiEntity>;
    list(this: any, reqmatch?: CodeScanningAnalysiListMatch, ctrl?: Control): Promise<CodeScanningAnalysiEntity[]>;
}
export { CodeScanningAnalysiEntity };
