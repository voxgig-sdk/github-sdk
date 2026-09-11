import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ActionsForkPrContributorApproval, ActionsForkPrContributorApprovalLoadMatch } from '../GithubTypes';
declare class ActionsForkPrContributorApprovalEntity extends GithubEntityBase<ActionsForkPrContributorApproval> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ActionsForkPrContributorApprovalEntity): ActionsForkPrContributorApprovalEntity;
    load(this: any, reqmatch?: ActionsForkPrContributorApprovalLoadMatch, ctrl?: Control): Promise<ActionsForkPrContributorApprovalEntity>;
}
export { ActionsForkPrContributorApprovalEntity };
