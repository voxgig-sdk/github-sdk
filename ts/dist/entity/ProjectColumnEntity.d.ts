import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ProjectColumn, ProjectColumnLoadMatch, ProjectColumnListMatch, ProjectColumnCreateData, ProjectColumnUpdateData } from '../GithubTypes';
declare class ProjectColumnEntity extends GithubEntityBase<ProjectColumn> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ProjectColumnEntity): ProjectColumnEntity;
    load(this: any, reqmatch?: ProjectColumnLoadMatch, ctrl?: Control): Promise<ProjectColumnEntity>;
    list(this: any, reqmatch?: ProjectColumnListMatch, ctrl?: Control): Promise<ProjectColumnEntity[]>;
    create(this: any, reqdata?: ProjectColumnCreateData, ctrl?: Control): Promise<ProjectColumnEntity>;
    update(this: any, reqdata?: ProjectColumnUpdateData, ctrl?: Control): Promise<ProjectColumnEntity>;
}
export { ProjectColumnEntity };
