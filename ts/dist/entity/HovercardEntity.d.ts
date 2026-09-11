import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Hovercard, HovercardListMatch } from '../GithubTypes';
declare class HovercardEntity extends GithubEntityBase<Hovercard> {
    constructor(client: GithubSDK, entopts: any);
    make(this: HovercardEntity): HovercardEntity;
    list(this: any, reqmatch?: HovercardListMatch, ctrl?: Control): Promise<HovercardEntity[]>;
}
export { HovercardEntity };
