import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { DeploymentStatus, DeploymentStatusLoadMatch, DeploymentStatusListMatch, DeploymentStatusCreateData } from '../GithubTypes';
declare class DeploymentStatusEntity extends GithubEntityBase<DeploymentStatus> {
    constructor(client: GithubSDK, entopts: any);
    make(this: DeploymentStatusEntity): DeploymentStatusEntity;
    load(this: any, reqmatch?: DeploymentStatusLoadMatch, ctrl?: Control): Promise<DeploymentStatusEntity>;
    list(this: any, reqmatch?: DeploymentStatusListMatch, ctrl?: Control): Promise<DeploymentStatusEntity[]>;
    create(this: any, reqdata?: DeploymentStatusCreateData, ctrl?: Control): Promise<DeploymentStatusEntity>;
}
export { DeploymentStatusEntity };
