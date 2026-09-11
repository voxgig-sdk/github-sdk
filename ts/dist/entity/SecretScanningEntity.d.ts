import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { SecretScanning, SecretScanningUpdateData } from '../GithubTypes';
declare class SecretScanningEntity extends GithubEntityBase<SecretScanning> {
    constructor(client: GithubSDK, entopts: any);
    make(this: SecretScanningEntity): SecretScanningEntity;
    update(this: any, reqdata?: SecretScanningUpdateData, ctrl?: Control): Promise<SecretScanningEntity>;
}
export { SecretScanningEntity };
