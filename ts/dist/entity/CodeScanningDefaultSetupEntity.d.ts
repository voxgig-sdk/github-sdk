import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CodeScanningDefaultSetup, CodeScanningDefaultSetupListMatch } from '../GithubTypes';
declare class CodeScanningDefaultSetupEntity extends GithubEntityBase<CodeScanningDefaultSetup> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CodeScanningDefaultSetupEntity): CodeScanningDefaultSetupEntity;
    list(this: any, reqmatch?: CodeScanningDefaultSetupListMatch, ctrl?: Control): Promise<CodeScanningDefaultSetupEntity[]>;
}
export { CodeScanningDefaultSetupEntity };
