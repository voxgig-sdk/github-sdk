import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Language, LanguageLoadMatch } from '../GithubTypes';
declare class LanguageEntity extends GithubEntityBase<Language> {
    constructor(client: GithubSDK, entopts: any);
    make(this: LanguageEntity): LanguageEntity;
    load(this: any, reqmatch?: LanguageLoadMatch, ctrl?: Control): Promise<LanguageEntity>;
}
export { LanguageEntity };
