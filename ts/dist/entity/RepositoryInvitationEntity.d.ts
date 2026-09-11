import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { RepositoryInvitation, RepositoryInvitationListMatch, RepositoryInvitationUpdateData } from '../GithubTypes';
declare class RepositoryInvitationEntity extends GithubEntityBase<RepositoryInvitation> {
    constructor(client: GithubSDK, entopts: any);
    make(this: RepositoryInvitationEntity): RepositoryInvitationEntity;
    list(this: any, reqmatch?: RepositoryInvitationListMatch, ctrl?: Control): Promise<RepositoryInvitationEntity[]>;
    update(this: any, reqdata?: RepositoryInvitationUpdateData, ctrl?: Control): Promise<RepositoryInvitationEntity>;
}
export { RepositoryInvitationEntity };
