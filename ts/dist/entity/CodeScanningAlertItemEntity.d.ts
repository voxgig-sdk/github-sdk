import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CodeScanningAlertItem, CodeScanningAlertItemListMatch } from '../GithubTypes';
declare class CodeScanningAlertItemEntity extends GithubEntityBase<CodeScanningAlertItem> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CodeScanningAlertItemEntity): CodeScanningAlertItemEntity;
    list(this: any, reqmatch?: CodeScanningAlertItemListMatch, ctrl?: Control): Promise<CodeScanningAlertItemEntity[]>;
}
export { CodeScanningAlertItemEntity };
