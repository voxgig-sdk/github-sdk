import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ProjectsV2ItemWithContent, ProjectsV2ItemWithContentLoadMatch, ProjectsV2ItemWithContentListMatch, ProjectsV2ItemWithContentUpdateData } from '../GithubTypes';
declare class ProjectsV2ItemWithContentEntity extends GithubEntityBase<ProjectsV2ItemWithContent> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ProjectsV2ItemWithContentEntity): ProjectsV2ItemWithContentEntity;
    load(this: any, reqmatch?: ProjectsV2ItemWithContentLoadMatch, ctrl?: Control): Promise<ProjectsV2ItemWithContentEntity>;
    list(this: any, reqmatch?: ProjectsV2ItemWithContentListMatch, ctrl?: Control): Promise<ProjectsV2ItemWithContentEntity[]>;
    update(this: any, reqdata?: ProjectsV2ItemWithContentUpdateData, ctrl?: Control): Promise<ProjectsV2ItemWithContentEntity>;
}
export { ProjectsV2ItemWithContentEntity };
