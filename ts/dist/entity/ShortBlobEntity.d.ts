import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ShortBlob, ShortBlobCreateData } from '../GithubTypes';
declare class ShortBlobEntity extends GithubEntityBase<ShortBlob> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ShortBlobEntity): ShortBlobEntity;
    create(this: any, reqdata?: ShortBlobCreateData, ctrl?: Control): Promise<ShortBlobEntity>;
}
export { ShortBlobEntity };
