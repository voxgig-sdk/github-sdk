import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ActionsVariable, ActionsVariableLoadMatch } from '../GithubTypes';
declare class ActionsVariableEntity extends GithubEntityBase<ActionsVariable> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ActionsVariableEntity): ActionsVariableEntity;
    load(this: any, reqmatch?: ActionsVariableLoadMatch, ctrl?: Control): Promise<ActionsVariableEntity>;
}
export { ActionsVariableEntity };
