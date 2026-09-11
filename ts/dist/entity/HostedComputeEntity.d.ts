import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { HostedCompute, HostedComputeListMatch, HostedComputeRemoveMatch } from '../GithubTypes';
declare class HostedComputeEntity extends GithubEntityBase<HostedCompute> {
    constructor(client: GithubSDK, entopts: any);
    make(this: HostedComputeEntity): HostedComputeEntity;
    list(this: any, reqmatch?: HostedComputeListMatch, ctrl?: Control): Promise<HostedComputeEntity[]>;
    remove(this: any, reqmatch?: HostedComputeRemoveMatch, ctrl?: Control): Promise<HostedComputeEntity>;
}
export { HostedComputeEntity };
