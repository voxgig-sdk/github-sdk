import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Gist, GistLoadMatch, GistListMatch, GistCreateData, GistUpdateData, GistRemoveMatch } from '../GithubTypes';
declare class GistEntity extends GithubEntityBase<Gist> {
    constructor(client: GithubSDK, entopts: any);
    make(this: GistEntity): GistEntity;
    load(this: any, reqmatch?: GistLoadMatch, ctrl?: Control): Promise<GistEntity>;
    list(this: any, reqmatch?: GistListMatch, ctrl?: Control): Promise<GistEntity[]>;
    create(this: any, reqdata?: GistCreateData, ctrl?: Control): Promise<GistEntity>;
    update(this: any, reqdata?: GistUpdateData, ctrl?: Control): Promise<GistEntity>;
    remove(this: any, reqmatch?: GistRemoveMatch, ctrl?: Control): Promise<GistEntity>;
}
export { GistEntity };
