import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Deployment, DeploymentLoadMatch, DeploymentListMatch, DeploymentCreateData } from '../GithubTypes';
declare class DeploymentEntity extends GithubEntityBase<Deployment> {
    constructor(client: GithubSDK, entopts: any);
    make(this: DeploymentEntity): DeploymentEntity;
    load(this: any, reqmatch?: DeploymentLoadMatch, ctrl?: Control): Promise<DeploymentEntity>;
    list(this: any, reqmatch?: DeploymentListMatch, ctrl?: Control): Promise<DeploymentEntity[]>;
    create(this: any, reqdata?: DeploymentCreateData, ctrl?: Control): Promise<DeploymentEntity>;
}
export { DeploymentEntity };
