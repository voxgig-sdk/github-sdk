import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { PageBuildStatus, PageBuildStatusCreateData } from '../GithubTypes';
declare class PageBuildStatusEntity extends GithubEntityBase<PageBuildStatus> {
    constructor(client: GithubSDK, entopts: any);
    make(this: PageBuildStatusEntity): PageBuildStatusEntity;
    create(this: any, reqdata?: PageBuildStatusCreateData, ctrl?: Control): Promise<PageBuildStatusEntity>;
}
export { PageBuildStatusEntity };
