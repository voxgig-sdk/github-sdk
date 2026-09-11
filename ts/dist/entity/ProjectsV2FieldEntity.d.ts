import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ProjectsV2Field, ProjectsV2FieldLoadMatch, ProjectsV2FieldListMatch } from '../GithubTypes';
declare class ProjectsV2FieldEntity extends GithubEntityBase<ProjectsV2Field> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ProjectsV2FieldEntity): ProjectsV2FieldEntity;
    load(this: any, reqmatch?: ProjectsV2FieldLoadMatch, ctrl?: Control): Promise<ProjectsV2FieldEntity>;
    list(this: any, reqmatch?: ProjectsV2FieldListMatch, ctrl?: Control): Promise<ProjectsV2FieldEntity[]>;
}
export { ProjectsV2FieldEntity };
