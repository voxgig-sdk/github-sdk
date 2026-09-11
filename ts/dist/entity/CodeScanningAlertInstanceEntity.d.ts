import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CodeScanningAlertInstance, CodeScanningAlertInstanceListMatch } from '../GithubTypes';
declare class CodeScanningAlertInstanceEntity extends GithubEntityBase<CodeScanningAlertInstance> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CodeScanningAlertInstanceEntity): CodeScanningAlertInstanceEntity;
    list(this: any, reqmatch?: CodeScanningAlertInstanceListMatch, ctrl?: Control): Promise<CodeScanningAlertInstanceEntity[]>;
}
export { CodeScanningAlertInstanceEntity };
