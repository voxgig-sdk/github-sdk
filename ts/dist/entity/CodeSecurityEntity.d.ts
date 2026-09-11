import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CodeSecurity, CodeSecurityUpdateData, CodeSecurityRemoveMatch } from '../GithubTypes';
declare class CodeSecurityEntity extends GithubEntityBase<CodeSecurity> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CodeSecurityEntity): CodeSecurityEntity;
    update(this: any, reqdata?: CodeSecurityUpdateData, ctrl?: Control): Promise<CodeSecurityEntity>;
    remove(this: any, reqmatch?: CodeSecurityRemoveMatch, ctrl?: Control): Promise<CodeSecurityEntity>;
}
export { CodeSecurityEntity };
