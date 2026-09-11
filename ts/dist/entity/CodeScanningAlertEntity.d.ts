import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CodeScanningAlert, CodeScanningAlertLoadMatch, CodeScanningAlertUpdateData } from '../GithubTypes';
declare class CodeScanningAlertEntity extends GithubEntityBase<CodeScanningAlert> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CodeScanningAlertEntity): CodeScanningAlertEntity;
    load(this: any, reqmatch?: CodeScanningAlertLoadMatch, ctrl?: Control): Promise<CodeScanningAlertEntity>;
    update(this: any, reqdata?: CodeScanningAlertUpdateData, ctrl?: Control): Promise<CodeScanningAlertEntity>;
}
export { CodeScanningAlertEntity };
