import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CopilotOrganizationDetail, CopilotOrganizationDetailLoadMatch } from '../GithubTypes';
declare class CopilotOrganizationDetailEntity extends GithubEntityBase<CopilotOrganizationDetail> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CopilotOrganizationDetailEntity): CopilotOrganizationDetailEntity;
    load(this: any, reqmatch?: CopilotOrganizationDetailLoadMatch, ctrl?: Control): Promise<CopilotOrganizationDetailEntity>;
}
export { CopilotOrganizationDetailEntity };
