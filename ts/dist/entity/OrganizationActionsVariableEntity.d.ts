import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { OrganizationActionsVariable, OrganizationActionsVariableLoadMatch } from '../GithubTypes';
declare class OrganizationActionsVariableEntity extends GithubEntityBase<OrganizationActionsVariable> {
    constructor(client: GithubSDK, entopts: any);
    make(this: OrganizationActionsVariableEntity): OrganizationActionsVariableEntity;
    load(this: any, reqmatch?: OrganizationActionsVariableLoadMatch, ctrl?: Control): Promise<OrganizationActionsVariableEntity>;
}
export { OrganizationActionsVariableEntity };
