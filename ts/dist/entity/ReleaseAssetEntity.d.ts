import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ReleaseAsset, ReleaseAssetLoadMatch, ReleaseAssetListMatch, ReleaseAssetCreateData, ReleaseAssetUpdateData } from '../GithubTypes';
declare class ReleaseAssetEntity extends GithubEntityBase<ReleaseAsset> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ReleaseAssetEntity): ReleaseAssetEntity;
    load(this: any, reqmatch?: ReleaseAssetLoadMatch, ctrl?: Control): Promise<ReleaseAssetEntity>;
    list(this: any, reqmatch?: ReleaseAssetListMatch, ctrl?: Control): Promise<ReleaseAssetEntity[]>;
    create(this: any, reqdata?: ReleaseAssetCreateData, ctrl?: Control): Promise<ReleaseAssetEntity>;
    update(this: any, reqdata?: ReleaseAssetUpdateData, ctrl?: Control): Promise<ReleaseAssetEntity>;
}
export { ReleaseAssetEntity };
