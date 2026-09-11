import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { PageBuild, PageBuildLoadMatch, PageBuildListMatch } from '../GithubTypes';
declare class PageBuildEntity extends GithubEntityBase<PageBuild> {
    constructor(client: GithubSDK, entopts: any);
    make(this: PageBuildEntity): PageBuildEntity;
    load(this: any, reqmatch?: PageBuildLoadMatch, ctrl?: Control): Promise<PageBuildEntity>;
    list(this: any, reqmatch?: PageBuildListMatch, ctrl?: Control): Promise<PageBuildEntity[]>;
}
export { PageBuildEntity };
