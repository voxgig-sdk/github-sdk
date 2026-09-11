import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { GpgKey, GpgKeyLoadMatch, GpgKeyListMatch, GpgKeyCreateData } from '../GithubTypes';
declare class GpgKeyEntity extends GithubEntityBase<GpgKey> {
    constructor(client: GithubSDK, entopts: any);
    make(this: GpgKeyEntity): GpgKeyEntity;
    load(this: any, reqmatch?: GpgKeyLoadMatch, ctrl?: Control): Promise<GpgKeyEntity>;
    list(this: any, reqmatch?: GpgKeyListMatch, ctrl?: Control): Promise<GpgKeyEntity[]>;
    create(this: any, reqdata?: GpgKeyCreateData, ctrl?: Control): Promise<GpgKeyEntity>;
}
export { GpgKeyEntity };
