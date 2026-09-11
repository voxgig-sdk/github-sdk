import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CheckSuitePreference, CheckSuitePreferenceUpdateData } from '../GithubTypes';
declare class CheckSuitePreferenceEntity extends GithubEntityBase<CheckSuitePreference> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CheckSuitePreferenceEntity): CheckSuitePreferenceEntity;
    update(this: any, reqdata?: CheckSuitePreferenceUpdateData, ctrl?: Control): Promise<CheckSuitePreferenceEntity>;
}
export { CheckSuitePreferenceEntity };
