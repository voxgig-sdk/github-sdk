import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Contributor, ContributorListMatch } from '../GithubTypes';
declare class ContributorEntity extends GithubEntityBase<Contributor> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ContributorEntity): ContributorEntity;
    list(this: any, reqmatch?: ContributorListMatch, ctrl?: Control): Promise<ContributorEntity[]>;
}
export { ContributorEntity };
