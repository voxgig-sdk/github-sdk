import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Installation, InstallationLoadMatch, InstallationListMatch, InstallationUpdateData, InstallationRemoveMatch } from '../GithubTypes';
declare class InstallationEntity extends GithubEntityBase<Installation> {
    constructor(client: GithubSDK, entopts: any);
    make(this: InstallationEntity): InstallationEntity;
    load(this: any, reqmatch?: InstallationLoadMatch, ctrl?: Control): Promise<InstallationEntity>;
    list(this: any, reqmatch?: InstallationListMatch, ctrl?: Control): Promise<InstallationEntity[]>;
    update(this: any, reqdata?: InstallationUpdateData, ctrl?: Control): Promise<InstallationEntity>;
    remove(this: any, reqmatch?: InstallationRemoveMatch, ctrl?: Control): Promise<InstallationEntity>;
}
export { InstallationEntity };
