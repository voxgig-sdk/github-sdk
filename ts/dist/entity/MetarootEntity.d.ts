import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Metaroot, MetarootLoadMatch } from '../GithubTypes';
declare class MetarootEntity extends GithubEntityBase<Metaroot> {
    constructor(client: GithubSDK, entopts: any);
    make(this: MetarootEntity): MetarootEntity;
    load(this: any, reqmatch?: MetarootLoadMatch, ctrl?: Control): Promise<MetarootEntity>;
}
export { MetarootEntity };
