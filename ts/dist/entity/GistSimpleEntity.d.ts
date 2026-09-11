import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { GistSimple, GistSimpleListMatch } from '../GithubTypes';
declare class GistSimpleEntity extends GithubEntityBase<GistSimple> {
    constructor(client: GithubSDK, entopts: any);
    make(this: GistSimpleEntity): GistSimpleEntity;
    list(this: any, reqmatch?: GistSimpleListMatch, ctrl?: Control): Promise<GistSimpleEntity[]>;
}
export { GistSimpleEntity };
