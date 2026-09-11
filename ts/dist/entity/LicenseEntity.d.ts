import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { License, LicenseLoadMatch, LicenseListMatch } from '../GithubTypes';
declare class LicenseEntity extends GithubEntityBase<License> {
    constructor(client: GithubSDK, entopts: any);
    make(this: LicenseEntity): LicenseEntity;
    load(this: any, reqmatch?: LicenseLoadMatch, ctrl?: Control): Promise<LicenseEntity>;
    list(this: any, reqmatch?: LicenseListMatch, ctrl?: Control): Promise<LicenseEntity[]>;
}
export { LicenseEntity };
