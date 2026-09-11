import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { MergedUpstream, MergedUpstreamCreateData } from '../GithubTypes';
declare class MergedUpstreamEntity extends GithubEntityBase<MergedUpstream> {
    constructor(client: GithubSDK, entopts: any);
    make(this: MergedUpstreamEntity): MergedUpstreamEntity;
    create(this: any, reqdata?: MergedUpstreamCreateData, ctrl?: Control): Promise<MergedUpstreamEntity>;
}
export { MergedUpstreamEntity };
