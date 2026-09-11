import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { OrganizationInvitation, OrganizationInvitationListMatch, OrganizationInvitationCreateData } from '../GithubTypes';
declare class OrganizationInvitationEntity extends GithubEntityBase<OrganizationInvitation> {
    constructor(client: GithubSDK, entopts: any);
    make(this: OrganizationInvitationEntity): OrganizationInvitationEntity;
    list(this: any, reqmatch?: OrganizationInvitationListMatch, ctrl?: Control): Promise<OrganizationInvitationEntity[]>;
    create(this: any, reqdata?: OrganizationInvitationCreateData, ctrl?: Control): Promise<OrganizationInvitationEntity>;
}
export { OrganizationInvitationEntity };
