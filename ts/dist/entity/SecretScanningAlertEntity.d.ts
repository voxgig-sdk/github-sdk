import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { SecretScanningAlert, SecretScanningAlertLoadMatch, SecretScanningAlertListMatch, SecretScanningAlertUpdateData } from '../GithubTypes';
declare class SecretScanningAlertEntity extends GithubEntityBase<SecretScanningAlert> {
    constructor(client: GithubSDK, entopts: any);
    make(this: SecretScanningAlertEntity): SecretScanningAlertEntity;
    load(this: any, reqmatch?: SecretScanningAlertLoadMatch, ctrl?: Control): Promise<SecretScanningAlertEntity>;
    list(this: any, reqmatch?: SecretScanningAlertListMatch, ctrl?: Control): Promise<SecretScanningAlertEntity[]>;
    update(this: any, reqdata?: SecretScanningAlertUpdateData, ctrl?: Control): Promise<SecretScanningAlertEntity>;
}
export { SecretScanningAlertEntity };
