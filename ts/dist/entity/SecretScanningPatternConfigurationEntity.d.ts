import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { SecretScanningPatternConfiguration, SecretScanningPatternConfigurationListMatch } from '../GithubTypes';
declare class SecretScanningPatternConfigurationEntity extends GithubEntityBase<SecretScanningPatternConfiguration> {
    constructor(client: GithubSDK, entopts: any);
    make(this: SecretScanningPatternConfigurationEntity): SecretScanningPatternConfigurationEntity;
    list(this: any, reqmatch?: SecretScanningPatternConfigurationListMatch, ctrl?: Control): Promise<SecretScanningPatternConfigurationEntity[]>;
}
export { SecretScanningPatternConfigurationEntity };
