import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { OrganizationSecretScanningAlert, OrganizationSecretScanningAlertListMatch } from '../GithubTypes';
declare class OrganizationSecretScanningAlertEntity extends GithubEntityBase<OrganizationSecretScanningAlert> {
    constructor(client: GithubSDK, entopts: any);
    make(this: OrganizationSecretScanningAlertEntity): OrganizationSecretScanningAlertEntity;
    list(this: any, reqmatch?: OrganizationSecretScanningAlertListMatch, ctrl?: Control): Promise<OrganizationSecretScanningAlertEntity[]>;
}
export { OrganizationSecretScanningAlertEntity };
