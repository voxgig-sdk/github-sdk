import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { BaseGist, BaseGistListMatch, BaseGistCreateData } from '../GithubTypes';
declare class BaseGistEntity extends GithubEntityBase<BaseGist> {
    constructor(client: GithubSDK, entopts: any);
    make(this: BaseGistEntity): BaseGistEntity;
    list(this: any, reqmatch?: BaseGistListMatch, ctrl?: Control): Promise<BaseGistEntity[]>;
    create(this: any, reqdata?: BaseGistCreateData, ctrl?: Control): Promise<BaseGistEntity>;
}
export { BaseGistEntity };
