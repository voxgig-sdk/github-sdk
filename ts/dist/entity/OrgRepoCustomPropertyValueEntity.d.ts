import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { OrgRepoCustomPropertyValue, OrgRepoCustomPropertyValueListMatch } from '../GithubTypes';
declare class OrgRepoCustomPropertyValueEntity extends GithubEntityBase<OrgRepoCustomPropertyValue> {
    constructor(client: GithubSDK, entopts: any);
    make(this: OrgRepoCustomPropertyValueEntity): OrgRepoCustomPropertyValueEntity;
    list(this: any, reqmatch?: OrgRepoCustomPropertyValueListMatch, ctrl?: Control): Promise<OrgRepoCustomPropertyValueEntity[]>;
}
export { OrgRepoCustomPropertyValueEntity };
