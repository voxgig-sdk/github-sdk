import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { OrganizationProgrammaticAccessGrant, OrganizationProgrammaticAccessGrantListMatch } from '../GithubTypes';
declare class OrganizationProgrammaticAccessGrantEntity extends GithubEntityBase<OrganizationProgrammaticAccessGrant> {
    constructor(client: GithubSDK, entopts: any);
    make(this: OrganizationProgrammaticAccessGrantEntity): OrganizationProgrammaticAccessGrantEntity;
    list(this: any, reqmatch?: OrganizationProgrammaticAccessGrantListMatch, ctrl?: Control): Promise<OrganizationProgrammaticAccessGrantEntity[]>;
}
export { OrganizationProgrammaticAccessGrantEntity };
