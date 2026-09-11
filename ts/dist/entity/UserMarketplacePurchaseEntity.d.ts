import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { UserMarketplacePurchase, UserMarketplacePurchaseListMatch } from '../GithubTypes';
declare class UserMarketplacePurchaseEntity extends GithubEntityBase<UserMarketplacePurchase> {
    constructor(client: GithubSDK, entopts: any);
    make(this: UserMarketplacePurchaseEntity): UserMarketplacePurchaseEntity;
    list(this: any, reqmatch?: UserMarketplacePurchaseListMatch, ctrl?: Control): Promise<UserMarketplacePurchaseEntity[]>;
}
export { UserMarketplacePurchaseEntity };
