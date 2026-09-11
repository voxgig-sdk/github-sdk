import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CodeScanningSarifsStatus, CodeScanningSarifsStatusLoadMatch } from '../GithubTypes';
declare class CodeScanningSarifsStatusEntity extends GithubEntityBase<CodeScanningSarifsStatus> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CodeScanningSarifsStatusEntity): CodeScanningSarifsStatusEntity;
    load(this: any, reqmatch?: CodeScanningSarifsStatusLoadMatch, ctrl?: Control): Promise<CodeScanningSarifsStatusEntity>;
}
export { CodeScanningSarifsStatusEntity };
