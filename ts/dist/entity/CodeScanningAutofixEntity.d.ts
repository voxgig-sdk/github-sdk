import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CodeScanningAutofix, CodeScanningAutofixLoadMatch, CodeScanningAutofixCreateData } from '../GithubTypes';
declare class CodeScanningAutofixEntity extends GithubEntityBase<CodeScanningAutofix> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CodeScanningAutofixEntity): CodeScanningAutofixEntity;
    load(this: any, reqmatch?: CodeScanningAutofixLoadMatch, ctrl?: Control): Promise<CodeScanningAutofixEntity>;
    create(this: any, reqdata?: CodeScanningAutofixCreateData, ctrl?: Control): Promise<CodeScanningAutofixEntity>;
}
export { CodeScanningAutofixEntity };
