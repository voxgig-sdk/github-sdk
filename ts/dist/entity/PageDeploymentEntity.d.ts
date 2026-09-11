import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { PageDeployment, PageDeploymentCreateData } from '../GithubTypes';
declare class PageDeploymentEntity extends GithubEntityBase<PageDeployment> {
    constructor(client: GithubSDK, entopts: any);
    make(this: PageDeploymentEntity): PageDeploymentEntity;
    create(this: any, reqdata?: PageDeploymentCreateData, ctrl?: Control): Promise<PageDeploymentEntity>;
}
export { PageDeploymentEntity };
