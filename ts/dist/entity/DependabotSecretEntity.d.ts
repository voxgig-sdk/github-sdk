import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { DependabotSecret, DependabotSecretLoadMatch } from '../GithubTypes';
declare class DependabotSecretEntity extends GithubEntityBase<DependabotSecret> {
    constructor(client: GithubSDK, entopts: any);
    make(this: DependabotSecretEntity): DependabotSecretEntity;
    load(this: any, reqmatch?: DependabotSecretLoadMatch, ctrl?: Control): Promise<DependabotSecretEntity>;
}
export { DependabotSecretEntity };
