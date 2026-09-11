import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { DeployKey, DeployKeyLoadMatch, DeployKeyListMatch, DeployKeyCreateData } from '../GithubTypes';
declare class DeployKeyEntity extends GithubEntityBase<DeployKey> {
    constructor(client: GithubSDK, entopts: any);
    make(this: DeployKeyEntity): DeployKeyEntity;
    load(this: any, reqmatch?: DeployKeyLoadMatch, ctrl?: Control): Promise<DeployKeyEntity>;
    list(this: any, reqmatch?: DeployKeyListMatch, ctrl?: Control): Promise<DeployKeyEntity[]>;
    create(this: any, reqdata?: DeployKeyCreateData, ctrl?: Control): Promise<DeployKeyEntity>;
}
export { DeployKeyEntity };
