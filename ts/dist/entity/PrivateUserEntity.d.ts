import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { PrivateUser } from '../GithubTypes';
declare class PrivateUserEntity extends GithubEntityBase<PrivateUser> {
    constructor(client: GithubSDK, entopts: any);
    make(this: PrivateUserEntity): PrivateUserEntity;
}
export { PrivateUserEntity };
