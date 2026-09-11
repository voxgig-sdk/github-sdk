import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CodeSecurityDefaultConfiguration, CodeSecurityDefaultConfigurationListMatch } from '../GithubTypes';
declare class CodeSecurityDefaultConfigurationEntity extends GithubEntityBase<CodeSecurityDefaultConfiguration> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CodeSecurityDefaultConfigurationEntity): CodeSecurityDefaultConfigurationEntity;
    list(this: any, reqmatch?: CodeSecurityDefaultConfigurationListMatch, ctrl?: Control): Promise<CodeSecurityDefaultConfigurationEntity[]>;
}
export { CodeSecurityDefaultConfigurationEntity };
