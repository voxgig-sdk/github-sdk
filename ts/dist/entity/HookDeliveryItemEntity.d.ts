import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { HookDeliveryItem, HookDeliveryItemListMatch } from '../GithubTypes';
declare class HookDeliveryItemEntity extends GithubEntityBase<HookDeliveryItem> {
    constructor(client: GithubSDK, entopts: any);
    make(this: HookDeliveryItemEntity): HookDeliveryItemEntity;
    list(this: any, reqmatch?: HookDeliveryItemListMatch, ctrl?: Control): Promise<HookDeliveryItemEntity[]>;
}
export { HookDeliveryItemEntity };
