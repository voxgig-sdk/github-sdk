import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Page, PageLoadMatch, PageCreateData } from '../GithubTypes';
declare class PageEntity extends GithubEntityBase<Page> {
    constructor(client: GithubSDK, entopts: any);
    make(this: PageEntity): PageEntity;
    load(this: any, reqmatch?: PageLoadMatch, ctrl?: Control): Promise<PageEntity>;
    create(this: any, reqdata?: PageCreateData, ctrl?: Control): Promise<PageEntity>;
}
export { PageEntity };
