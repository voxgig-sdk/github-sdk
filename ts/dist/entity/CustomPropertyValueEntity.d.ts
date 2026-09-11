import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CustomPropertyValue, CustomPropertyValueListMatch } from '../GithubTypes';
declare class CustomPropertyValueEntity extends GithubEntityBase<CustomPropertyValue> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CustomPropertyValueEntity): CustomPropertyValueEntity;
    list(this: any, reqmatch?: CustomPropertyValueListMatch, ctrl?: Control): Promise<CustomPropertyValueEntity[]>;
}
export { CustomPropertyValueEntity };
