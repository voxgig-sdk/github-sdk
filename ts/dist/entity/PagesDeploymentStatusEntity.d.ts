import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { PagesDeploymentStatus, PagesDeploymentStatusLoadMatch, PagesDeploymentStatusCreateData } from '../GithubTypes';
declare class PagesDeploymentStatusEntity extends GithubEntityBase<PagesDeploymentStatus> {
    constructor(client: GithubSDK, entopts: any);
    make(this: PagesDeploymentStatusEntity): PagesDeploymentStatusEntity;
    load(this: any, reqmatch?: PagesDeploymentStatusLoadMatch, ctrl?: Control): Promise<PagesDeploymentStatusEntity>;
    create(this: any, reqdata?: PagesDeploymentStatusCreateData, ctrl?: Control): Promise<PagesDeploymentStatusEntity>;
}
export { PagesDeploymentStatusEntity };
