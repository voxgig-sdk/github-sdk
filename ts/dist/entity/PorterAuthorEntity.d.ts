import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { PorterAuthor, PorterAuthorListMatch, PorterAuthorUpdateData } from '../GithubTypes';
declare class PorterAuthorEntity extends GithubEntityBase<PorterAuthor> {
    constructor(client: GithubSDK, entopts: any);
    make(this: PorterAuthorEntity): PorterAuthorEntity;
    list(this: any, reqmatch?: PorterAuthorListMatch, ctrl?: Control): Promise<PorterAuthorEntity[]>;
    update(this: any, reqdata?: PorterAuthorUpdateData, ctrl?: Control): Promise<PorterAuthorEntity>;
}
export { PorterAuthorEntity };
