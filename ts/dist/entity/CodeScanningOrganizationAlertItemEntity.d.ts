import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CodeScanningOrganizationAlertItem, CodeScanningOrganizationAlertItemListMatch } from '../GithubTypes';
declare class CodeScanningOrganizationAlertItemEntity extends GithubEntityBase<CodeScanningOrganizationAlertItem> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CodeScanningOrganizationAlertItemEntity): CodeScanningOrganizationAlertItemEntity;
    list(this: any, reqmatch?: CodeScanningOrganizationAlertItemListMatch, ctrl?: Control): Promise<CodeScanningOrganizationAlertItemEntity[]>;
}
export { CodeScanningOrganizationAlertItemEntity };
