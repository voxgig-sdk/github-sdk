import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CodeScanningVariantAnalysi, CodeScanningVariantAnalysiLoadMatch, CodeScanningVariantAnalysiCreateData } from '../GithubTypes';
declare class CodeScanningVariantAnalysiEntity extends GithubEntityBase<CodeScanningVariantAnalysi> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CodeScanningVariantAnalysiEntity): CodeScanningVariantAnalysiEntity;
    load(this: any, reqmatch?: CodeScanningVariantAnalysiLoadMatch, ctrl?: Control): Promise<CodeScanningVariantAnalysiEntity>;
    create(this: any, reqdata?: CodeScanningVariantAnalysiCreateData, ctrl?: Control): Promise<CodeScanningVariantAnalysiEntity>;
}
export { CodeScanningVariantAnalysiEntity };
