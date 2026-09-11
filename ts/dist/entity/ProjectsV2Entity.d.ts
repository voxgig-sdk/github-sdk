import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ProjectsV2, ProjectsV2LoadMatch, ProjectsV2ListMatch } from '../GithubTypes';
declare class ProjectsV2Entity extends GithubEntityBase<ProjectsV2> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ProjectsV2Entity): ProjectsV2Entity;
    load(this: any, reqmatch?: ProjectsV2LoadMatch, ctrl?: Control): Promise<ProjectsV2Entity>;
    list(this: any, reqmatch?: ProjectsV2ListMatch, ctrl?: Control): Promise<ProjectsV2Entity[]>;
}
export { ProjectsV2Entity };
