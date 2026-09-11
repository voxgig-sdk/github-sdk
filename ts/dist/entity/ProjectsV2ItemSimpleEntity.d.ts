import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ProjectsV2ItemSimple, ProjectsV2ItemSimpleCreateData } from '../GithubTypes';
declare class ProjectsV2ItemSimpleEntity extends GithubEntityBase<ProjectsV2ItemSimple> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ProjectsV2ItemSimpleEntity): ProjectsV2ItemSimpleEntity;
    create(this: any, reqdata?: ProjectsV2ItemSimpleCreateData, ctrl?: Control): Promise<ProjectsV2ItemSimpleEntity>;
}
export { ProjectsV2ItemSimpleEntity };
