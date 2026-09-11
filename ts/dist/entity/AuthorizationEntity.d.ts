import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Authorization, AuthorizationCreateData, AuthorizationUpdateData } from '../GithubTypes';
declare class AuthorizationEntity extends GithubEntityBase<Authorization> {
    constructor(client: GithubSDK, entopts: any);
    make(this: AuthorizationEntity): AuthorizationEntity;
    create(this: any, reqdata?: AuthorizationCreateData, ctrl?: Control): Promise<AuthorizationEntity>;
    update(this: any, reqdata?: AuthorizationUpdateData, ctrl?: Control): Promise<AuthorizationEntity>;
}
export { AuthorizationEntity };
