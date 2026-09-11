import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { SocialAccount, SocialAccountListMatch, SocialAccountCreateData } from '../GithubTypes';
declare class SocialAccountEntity extends GithubEntityBase<SocialAccount> {
    constructor(client: GithubSDK, entopts: any);
    make(this: SocialAccountEntity): SocialAccountEntity;
    list(this: any, reqmatch?: SocialAccountListMatch, ctrl?: Control): Promise<SocialAccountEntity[]>;
    create(this: any, reqdata?: SocialAccountCreateData, ctrl?: Control): Promise<SocialAccountEntity>;
}
export { SocialAccountEntity };
