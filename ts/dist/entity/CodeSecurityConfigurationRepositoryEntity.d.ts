import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CodeSecurityConfigurationRepository, CodeSecurityConfigurationRepositoryListMatch } from '../GithubTypes';
declare class CodeSecurityConfigurationRepositoryEntity extends GithubEntityBase<CodeSecurityConfigurationRepository> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CodeSecurityConfigurationRepositoryEntity): CodeSecurityConfigurationRepositoryEntity;
    list(this: any, reqmatch?: CodeSecurityConfigurationRepositoryListMatch, ctrl?: Control): Promise<CodeSecurityConfigurationRepositoryEntity[]>;
}
export { CodeSecurityConfigurationRepositoryEntity };
