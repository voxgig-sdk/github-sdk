import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CodeFrequencyStat, CodeFrequencyStatListMatch } from '../GithubTypes';
declare class CodeFrequencyStatEntity extends GithubEntityBase<CodeFrequencyStat> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CodeFrequencyStatEntity): CodeFrequencyStatEntity;
    list(this: any, reqmatch?: CodeFrequencyStatListMatch, ctrl?: Control): Promise<CodeFrequencyStatEntity[]>;
}
export { CodeFrequencyStatEntity };
