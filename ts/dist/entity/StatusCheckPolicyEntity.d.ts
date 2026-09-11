import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { StatusCheckPolicy, StatusCheckPolicyListMatch, StatusCheckPolicyUpdateData } from '../GithubTypes';
declare class StatusCheckPolicyEntity extends GithubEntityBase<StatusCheckPolicy> {
    constructor(client: GithubSDK, entopts: any);
    make(this: StatusCheckPolicyEntity): StatusCheckPolicyEntity;
    list(this: any, reqmatch?: StatusCheckPolicyListMatch, ctrl?: Control): Promise<StatusCheckPolicyEntity[]>;
    update(this: any, reqdata?: StatusCheckPolicyUpdateData, ctrl?: Control): Promise<StatusCheckPolicyEntity>;
}
export { StatusCheckPolicyEntity };
