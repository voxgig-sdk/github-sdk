import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Subscriber, SubscriberListMatch } from '../GithubTypes';
declare class SubscriberEntity extends GithubEntityBase<Subscriber> {
    constructor(client: GithubSDK, entopts: any);
    make(this: SubscriberEntity): SubscriberEntity;
    list(this: any, reqmatch?: SubscriberListMatch, ctrl?: Control): Promise<SubscriberEntity[]>;
}
export { SubscriberEntity };
