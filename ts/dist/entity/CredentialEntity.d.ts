import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Credential, CredentialCreateData } from '../GithubTypes';
declare class CredentialEntity extends GithubEntityBase<Credential> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CredentialEntity): CredentialEntity;
    create(this: any, reqdata?: CredentialCreateData, ctrl?: Control): Promise<CredentialEntity>;
}
export { CredentialEntity };
