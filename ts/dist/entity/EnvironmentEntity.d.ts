import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Environment, EnvironmentLoadMatch, EnvironmentUpdateData } from '../GithubTypes';
declare class EnvironmentEntity extends GithubEntityBase<Environment> {
    constructor(client: GithubSDK, entopts: any);
    make(this: EnvironmentEntity): EnvironmentEntity;
    load(this: any, reqmatch?: EnvironmentLoadMatch, ctrl?: Control): Promise<EnvironmentEntity>;
    update(this: any, reqdata?: EnvironmentUpdateData, ctrl?: Control): Promise<EnvironmentEntity>;
}
export { EnvironmentEntity };
