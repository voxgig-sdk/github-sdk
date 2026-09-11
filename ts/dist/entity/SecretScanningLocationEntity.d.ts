import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { SecretScanningLocation, SecretScanningLocationListMatch } from '../GithubTypes';
declare class SecretScanningLocationEntity extends GithubEntityBase<SecretScanningLocation> {
    constructor(client: GithubSDK, entopts: any);
    make(this: SecretScanningLocationEntity): SecretScanningLocationEntity;
    list(this: any, reqmatch?: SecretScanningLocationListMatch, ctrl?: Control): Promise<SecretScanningLocationEntity[]>;
}
export { SecretScanningLocationEntity };
