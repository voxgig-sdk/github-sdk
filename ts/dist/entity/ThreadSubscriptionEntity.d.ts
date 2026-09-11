import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ThreadSubscription, ThreadSubscriptionLoadMatch, ThreadSubscriptionUpdateData } from '../GithubTypes';
declare class ThreadSubscriptionEntity extends GithubEntityBase<ThreadSubscription> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ThreadSubscriptionEntity): ThreadSubscriptionEntity;
    load(this: any, reqmatch?: ThreadSubscriptionLoadMatch, ctrl?: Control): Promise<ThreadSubscriptionEntity>;
    update(this: any, reqdata?: ThreadSubscriptionUpdateData, ctrl?: Control): Promise<ThreadSubscriptionEntity>;
}
export { ThreadSubscriptionEntity };
