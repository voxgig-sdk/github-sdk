import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { EnvironmentApproval, EnvironmentApprovalListMatch } from '../GithubTypes';
declare class EnvironmentApprovalEntity extends GithubEntityBase<EnvironmentApproval> {
    constructor(client: GithubSDK, entopts: any);
    make(this: EnvironmentApprovalEntity): EnvironmentApprovalEntity;
    list(this: any, reqmatch?: EnvironmentApprovalListMatch, ctrl?: Control): Promise<EnvironmentApprovalEntity[]>;
}
export { EnvironmentApprovalEntity };
