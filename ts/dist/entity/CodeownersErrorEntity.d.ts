import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CodeownersError, CodeownersErrorListMatch } from '../GithubTypes';
declare class CodeownersErrorEntity extends GithubEntityBase<CodeownersError> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CodeownersErrorEntity): CodeownersErrorEntity;
    list(this: any, reqmatch?: CodeownersErrorListMatch, ctrl?: Control): Promise<CodeownersErrorEntity[]>;
}
export { CodeownersErrorEntity };
