import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CodeFrequency, CodeFrequencyListMatch } from '../GithubTypes';
declare class CodeFrequencyEntity extends GithubEntityBase<CodeFrequency> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CodeFrequencyEntity): CodeFrequencyEntity;
    list(this: any, reqmatch?: CodeFrequencyListMatch, ctrl?: Control): Promise<CodeFrequencyEntity[]>;
}
export { CodeFrequencyEntity };
