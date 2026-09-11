import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CustomProperty, CustomPropertyLoadMatch, CustomPropertyListMatch, CustomPropertyUpdateData } from '../GithubTypes';
declare class CustomPropertyEntity extends GithubEntityBase<CustomProperty> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CustomPropertyEntity): CustomPropertyEntity;
    load(this: any, reqmatch?: CustomPropertyLoadMatch, ctrl?: Control): Promise<CustomPropertyEntity>;
    list(this: any, reqmatch?: CustomPropertyListMatch, ctrl?: Control): Promise<CustomPropertyEntity[]>;
    update(this: any, reqdata?: CustomPropertyUpdateData, ctrl?: Control): Promise<CustomPropertyEntity>;
}
export { CustomPropertyEntity };
