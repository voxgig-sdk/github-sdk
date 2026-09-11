import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CodeScanningCodeqlDatabase, CodeScanningCodeqlDatabaseLoadMatch, CodeScanningCodeqlDatabaseListMatch } from '../GithubTypes';
declare class CodeScanningCodeqlDatabaseEntity extends GithubEntityBase<CodeScanningCodeqlDatabase> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CodeScanningCodeqlDatabaseEntity): CodeScanningCodeqlDatabaseEntity;
    load(this: any, reqmatch?: CodeScanningCodeqlDatabaseLoadMatch, ctrl?: Control): Promise<CodeScanningCodeqlDatabaseEntity>;
    list(this: any, reqmatch?: CodeScanningCodeqlDatabaseListMatch, ctrl?: Control): Promise<CodeScanningCodeqlDatabaseEntity[]>;
}
export { CodeScanningCodeqlDatabaseEntity };
