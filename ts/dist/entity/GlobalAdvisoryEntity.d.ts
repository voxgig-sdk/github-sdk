import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { GlobalAdvisory, GlobalAdvisoryLoadMatch, GlobalAdvisoryListMatch } from '../GithubTypes';
declare class GlobalAdvisoryEntity extends GithubEntityBase<GlobalAdvisory> {
    constructor(client: GithubSDK, entopts: any);
    make(this: GlobalAdvisoryEntity): GlobalAdvisoryEntity;
    load(this: any, reqmatch?: GlobalAdvisoryLoadMatch, ctrl?: Control): Promise<GlobalAdvisoryEntity>;
    list(this: any, reqmatch?: GlobalAdvisoryListMatch, ctrl?: Control): Promise<GlobalAdvisoryEntity[]>;
}
export { GlobalAdvisoryEntity };
