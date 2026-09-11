import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ActionsPublicKey, ActionsPublicKeyLoadMatch } from '../GithubTypes';
declare class ActionsPublicKeyEntity extends GithubEntityBase<ActionsPublicKey> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ActionsPublicKeyEntity): ActionsPublicKeyEntity;
    load(this: any, reqmatch?: ActionsPublicKeyLoadMatch, ctrl?: Control): Promise<ActionsPublicKeyEntity>;
}
export { ActionsPublicKeyEntity };
