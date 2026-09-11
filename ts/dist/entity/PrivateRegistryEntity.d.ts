import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { PrivateRegistry, PrivateRegistryLoadMatch, PrivateRegistryListMatch, PrivateRegistryUpdateData, PrivateRegistryRemoveMatch } from '../GithubTypes';
declare class PrivateRegistryEntity extends GithubEntityBase<PrivateRegistry> {
    constructor(client: GithubSDK, entopts: any);
    make(this: PrivateRegistryEntity): PrivateRegistryEntity;
    load(this: any, reqmatch?: PrivateRegistryLoadMatch, ctrl?: Control): Promise<PrivateRegistryEntity>;
    list(this: any, reqmatch?: PrivateRegistryListMatch, ctrl?: Control): Promise<PrivateRegistryEntity[]>;
    update(this: any, reqdata?: PrivateRegistryUpdateData, ctrl?: Control): Promise<PrivateRegistryEntity>;
    remove(this: any, reqmatch?: PrivateRegistryRemoveMatch, ctrl?: Control): Promise<PrivateRegistryEntity>;
}
export { PrivateRegistryEntity };
