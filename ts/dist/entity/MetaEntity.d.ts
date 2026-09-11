import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Meta, MetaLoadMatch, MetaListMatch } from '../GithubTypes';
declare class MetaEntity extends GithubEntityBase<Meta> {
    constructor(client: GithubSDK, entopts: any);
    make(this: MetaEntity): MetaEntity;
    load(this: any, reqmatch?: MetaLoadMatch, ctrl?: Control): Promise<MetaEntity>;
    list(this: any, reqmatch?: MetaListMatch, ctrl?: Control): Promise<MetaEntity[]>;
}
export { MetaEntity };
