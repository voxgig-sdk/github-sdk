import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { DeploymentProtectionRule, DeploymentProtectionRuleLoadMatch, DeploymentProtectionRuleCreateData } from '../GithubTypes';
declare class DeploymentProtectionRuleEntity extends GithubEntityBase<DeploymentProtectionRule> {
    constructor(client: GithubSDK, entopts: any);
    make(this: DeploymentProtectionRuleEntity): DeploymentProtectionRuleEntity;
    load(this: any, reqmatch?: DeploymentProtectionRuleLoadMatch, ctrl?: Control): Promise<DeploymentProtectionRuleEntity>;
    create(this: any, reqdata?: DeploymentProtectionRuleCreateData, ctrl?: Control): Promise<DeploymentProtectionRuleEntity>;
}
export { DeploymentProtectionRuleEntity };
