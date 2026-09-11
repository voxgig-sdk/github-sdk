import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { AuthenticationToken, AuthenticationTokenCreateData } from '../GithubTypes';
declare class AuthenticationTokenEntity extends GithubEntityBase<AuthenticationToken> {
    constructor(client: GithubSDK, entopts: any);
    make(this: AuthenticationTokenEntity): AuthenticationTokenEntity;
    create(this: any, reqdata?: AuthenticationTokenCreateData, ctrl?: Control): Promise<AuthenticationTokenEntity>;
}
export { AuthenticationTokenEntity };
