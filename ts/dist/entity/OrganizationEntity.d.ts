import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Organization } from '../GithubTypes';
declare class OrganizationEntity extends GithubEntityBase<Organization> {
    constructor(client: GithubSDK, entopts: any);
    make(this: OrganizationEntity): OrganizationEntity;
}
export { OrganizationEntity };
