import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Import, ImportListMatch, ImportUpdateData } from '../GithubTypes';
declare class ImportEntity extends GithubEntityBase<Import> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ImportEntity): ImportEntity;
    list(this: any, reqmatch?: ImportListMatch, ctrl?: Control): Promise<ImportEntity[]>;
    update(this: any, reqdata?: ImportUpdateData, ctrl?: Control): Promise<ImportEntity>;
}
export { ImportEntity };
