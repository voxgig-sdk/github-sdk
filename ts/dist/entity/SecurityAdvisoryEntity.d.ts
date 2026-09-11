import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { SecurityAdvisory, SecurityAdvisoryCreateData } from '../GithubTypes';
declare class SecurityAdvisoryEntity extends GithubEntityBase<SecurityAdvisory> {
    constructor(client: GithubSDK, entopts: any);
    make(this: SecurityAdvisoryEntity): SecurityAdvisoryEntity;
    create(this: any, reqdata?: SecurityAdvisoryCreateData, ctrl?: Control): Promise<SecurityAdvisoryEntity>;
}
export { SecurityAdvisoryEntity };
