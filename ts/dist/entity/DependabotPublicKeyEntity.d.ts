import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { DependabotPublicKey, DependabotPublicKeyLoadMatch } from '../GithubTypes';
declare class DependabotPublicKeyEntity extends GithubEntityBase<DependabotPublicKey> {
    constructor(client: GithubSDK, entopts: any);
    make(this: DependabotPublicKeyEntity): DependabotPublicKeyEntity;
    load(this: any, reqmatch?: DependabotPublicKeyLoadMatch, ctrl?: Control): Promise<DependabotPublicKeyEntity>;
}
export { DependabotPublicKeyEntity };
