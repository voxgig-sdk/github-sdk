import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { SshSigningKey, SshSigningKeyLoadMatch, SshSigningKeyListMatch, SshSigningKeyCreateData } from '../GithubTypes';
declare class SshSigningKeyEntity extends GithubEntityBase<SshSigningKey> {
    constructor(client: GithubSDK, entopts: any);
    make(this: SshSigningKeyEntity): SshSigningKeyEntity;
    load(this: any, reqmatch?: SshSigningKeyLoadMatch, ctrl?: Control): Promise<SshSigningKeyEntity>;
    list(this: any, reqmatch?: SshSigningKeyListMatch, ctrl?: Control): Promise<SshSigningKeyEntity[]>;
    create(this: any, reqdata?: SshSigningKeyCreateData, ctrl?: Control): Promise<SshSigningKeyEntity>;
}
export { SshSigningKeyEntity };
