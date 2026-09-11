import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { InstallationToken, InstallationTokenCreateData } from '../GithubTypes';
declare class InstallationTokenEntity extends GithubEntityBase<InstallationToken> {
    constructor(client: GithubSDK, entopts: any);
    make(this: InstallationTokenEntity): InstallationTokenEntity;
    create(this: any, reqdata?: InstallationTokenCreateData, ctrl?: Control): Promise<InstallationTokenEntity>;
}
export { InstallationTokenEntity };
