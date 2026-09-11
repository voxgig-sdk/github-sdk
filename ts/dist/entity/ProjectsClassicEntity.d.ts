import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ProjectsClassic, ProjectsClassicCreateData, ProjectsClassicUpdateData, ProjectsClassicRemoveMatch } from '../GithubTypes';
declare class ProjectsClassicEntity extends GithubEntityBase<ProjectsClassic> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ProjectsClassicEntity): ProjectsClassicEntity;
    create(this: any, reqdata?: ProjectsClassicCreateData, ctrl?: Control): Promise<ProjectsClassicEntity>;
    update(this: any, reqdata?: ProjectsClassicUpdateData, ctrl?: Control): Promise<ProjectsClassicEntity>;
    remove(this: any, reqmatch?: ProjectsClassicRemoveMatch, ctrl?: Control): Promise<ProjectsClassicEntity>;
}
export { ProjectsClassicEntity };
