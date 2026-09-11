import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Blob, BlobLoadMatch } from '../GithubTypes';
declare class BlobEntity extends GithubEntityBase<Blob> {
    constructor(client: GithubSDK, entopts: any);
    make(this: BlobEntity): BlobEntity;
    load(this: any, reqmatch?: BlobLoadMatch, ctrl?: Control): Promise<BlobEntity>;
}
export { BlobEntity };
