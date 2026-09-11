import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ActionsSecret, ActionsSecretLoadMatch } from '../GithubTypes';
declare class ActionsSecretEntity extends GithubEntityBase<ActionsSecret> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ActionsSecretEntity): ActionsSecretEntity;
    load(this: any, reqmatch?: ActionsSecretLoadMatch, ctrl?: Control): Promise<ActionsSecretEntity>;
}
export { ActionsSecretEntity };
