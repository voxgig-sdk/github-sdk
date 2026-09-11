import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { DeploymentBranchPolicy, DeploymentBranchPolicyLoadMatch, DeploymentBranchPolicyCreateData, DeploymentBranchPolicyUpdateData } from '../GithubTypes';
declare class DeploymentBranchPolicyEntity extends GithubEntityBase<DeploymentBranchPolicy> {
    constructor(client: GithubSDK, entopts: any);
    make(this: DeploymentBranchPolicyEntity): DeploymentBranchPolicyEntity;
    load(this: any, reqmatch?: DeploymentBranchPolicyLoadMatch, ctrl?: Control): Promise<DeploymentBranchPolicyEntity>;
    create(this: any, reqdata?: DeploymentBranchPolicyCreateData, ctrl?: Control): Promise<DeploymentBranchPolicyEntity>;
    update(this: any, reqdata?: DeploymentBranchPolicyUpdateData, ctrl?: Control): Promise<DeploymentBranchPolicyEntity>;
}
export { DeploymentBranchPolicyEntity };
