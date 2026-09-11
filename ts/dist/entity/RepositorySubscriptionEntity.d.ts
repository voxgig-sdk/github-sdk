import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { RepositorySubscription, RepositorySubscriptionLoadMatch, RepositorySubscriptionUpdateData } from '../GithubTypes';
declare class RepositorySubscriptionEntity extends GithubEntityBase<RepositorySubscription> {
    constructor(client: GithubSDK, entopts: any);
    make(this: RepositorySubscriptionEntity): RepositorySubscriptionEntity;
    load(this: any, reqmatch?: RepositorySubscriptionLoadMatch, ctrl?: Control): Promise<RepositorySubscriptionEntity>;
    update(this: any, reqdata?: RepositorySubscriptionUpdateData, ctrl?: Control): Promise<RepositorySubscriptionEntity>;
}
export { RepositorySubscriptionEntity };
