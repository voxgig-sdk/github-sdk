import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { SecretScanningPushProtectionBypass, SecretScanningPushProtectionBypassCreateData } from '../GithubTypes';
declare class SecretScanningPushProtectionBypassEntity extends GithubEntityBase<SecretScanningPushProtectionBypass> {
    constructor(client: GithubSDK, entopts: any);
    make(this: SecretScanningPushProtectionBypassEntity): SecretScanningPushProtectionBypassEntity;
    create(this: any, reqdata?: SecretScanningPushProtectionBypassCreateData, ctrl?: Control): Promise<SecretScanningPushProtectionBypassEntity>;
}
export { SecretScanningPushProtectionBypassEntity };
