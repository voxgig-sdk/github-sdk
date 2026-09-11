import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CodeOfConduct, CodeOfConductLoadMatch, CodeOfConductListMatch } from '../GithubTypes';
declare class CodeOfConductEntity extends GithubEntityBase<CodeOfConduct> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CodeOfConductEntity): CodeOfConductEntity;
    load(this: any, reqmatch?: CodeOfConductLoadMatch, ctrl?: Control): Promise<CodeOfConductEntity>;
    list(this: any, reqmatch?: CodeOfConductListMatch, ctrl?: Control): Promise<CodeOfConductEntity[]>;
}
export { CodeOfConductEntity };
