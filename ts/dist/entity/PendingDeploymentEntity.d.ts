import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { PendingDeployment, PendingDeploymentListMatch } from '../GithubTypes';
declare class PendingDeploymentEntity extends GithubEntityBase<PendingDeployment> {
    constructor(client: GithubSDK, entopts: any);
    make(this: PendingDeploymentEntity): PendingDeploymentEntity;
    list(this: any, reqmatch?: PendingDeploymentListMatch, ctrl?: Control): Promise<PendingDeploymentEntity[]>;
}
export { PendingDeploymentEntity };
