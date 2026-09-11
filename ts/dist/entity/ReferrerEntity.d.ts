import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Referrer, ReferrerListMatch } from '../GithubTypes';
declare class ReferrerEntity extends GithubEntityBase<Referrer> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ReferrerEntity): ReferrerEntity;
    list(this: any, reqmatch?: ReferrerListMatch, ctrl?: Control): Promise<ReferrerEntity[]>;
}
export { ReferrerEntity };
