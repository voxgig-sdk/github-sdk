import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { HookDelivery, HookDeliveryLoadMatch } from '../GithubTypes';
declare class HookDeliveryEntity extends GithubEntityBase<HookDelivery> {
    constructor(client: GithubSDK, entopts: any);
    make(this: HookDeliveryEntity): HookDeliveryEntity;
    load(this: any, reqmatch?: HookDeliveryLoadMatch, ctrl?: Control): Promise<HookDeliveryEntity>;
}
export { HookDeliveryEntity };
