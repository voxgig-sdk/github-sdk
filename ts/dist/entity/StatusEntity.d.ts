import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Status, StatusListMatch, StatusCreateData } from '../GithubTypes';
declare class StatusEntity extends GithubEntityBase<Status> {
    constructor(client: GithubSDK, entopts: any);
    make(this: StatusEntity): StatusEntity;
    list(this: any, reqmatch?: StatusListMatch, ctrl?: Control): Promise<StatusEntity[]>;
    create(this: any, reqdata?: StatusCreateData, ctrl?: Control): Promise<StatusEntity>;
}
export { StatusEntity };
