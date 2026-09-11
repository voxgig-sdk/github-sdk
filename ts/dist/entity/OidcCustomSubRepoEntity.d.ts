import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { OidcCustomSubRepo, OidcCustomSubRepoListMatch } from '../GithubTypes';
declare class OidcCustomSubRepoEntity extends GithubEntityBase<OidcCustomSubRepo> {
    constructor(client: GithubSDK, entopts: any);
    make(this: OidcCustomSubRepoEntity): OidcCustomSubRepoEntity;
    list(this: any, reqmatch?: OidcCustomSubRepoListMatch, ctrl?: Control): Promise<OidcCustomSubRepoEntity[]>;
}
export { OidcCustomSubRepoEntity };
