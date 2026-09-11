import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CodeSecurityConfiguration, CodeSecurityConfigurationLoadMatch, CodeSecurityConfigurationListMatch, CodeSecurityConfigurationCreateData, CodeSecurityConfigurationUpdateData } from '../GithubTypes';
declare class CodeSecurityConfigurationEntity extends GithubEntityBase<CodeSecurityConfiguration> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CodeSecurityConfigurationEntity): CodeSecurityConfigurationEntity;
    load(this: any, reqmatch?: CodeSecurityConfigurationLoadMatch, ctrl?: Control): Promise<CodeSecurityConfigurationEntity>;
    list(this: any, reqmatch?: CodeSecurityConfigurationListMatch, ctrl?: Control): Promise<CodeSecurityConfigurationEntity[]>;
    create(this: any, reqdata?: CodeSecurityConfigurationCreateData, ctrl?: Control): Promise<CodeSecurityConfigurationEntity>;
    update(this: any, reqdata?: CodeSecurityConfigurationUpdateData, ctrl?: Control): Promise<CodeSecurityConfigurationEntity>;
}
export { CodeSecurityConfigurationEntity };
