import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CodeScanning, CodeScanningCreateData, CodeScanningRemoveMatch } from '../GithubTypes';
declare class CodeScanningEntity extends GithubEntityBase<CodeScanning> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CodeScanningEntity): CodeScanningEntity;
    create(this: any, reqdata?: CodeScanningCreateData, ctrl?: Control): Promise<CodeScanningEntity>;
    remove(this: any, reqmatch?: CodeScanningRemoveMatch, ctrl?: Control): Promise<CodeScanningEntity>;
}
export { CodeScanningEntity };
