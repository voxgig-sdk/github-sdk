import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { OidcCustomSub, OidcCustomSubListMatch } from '../GithubTypes';
declare class OidcCustomSubEntity extends GithubEntityBase<OidcCustomSub> {
    constructor(client: GithubSDK, entopts: any);
    make(this: OidcCustomSubEntity): OidcCustomSubEntity;
    list(this: any, reqmatch?: OidcCustomSubListMatch, ctrl?: Control): Promise<OidcCustomSubEntity[]>;
}
export { OidcCustomSubEntity };
