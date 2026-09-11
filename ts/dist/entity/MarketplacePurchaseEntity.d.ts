import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { MarketplacePurchase, MarketplacePurchaseLoadMatch, MarketplacePurchaseListMatch } from '../GithubTypes';
declare class MarketplacePurchaseEntity extends GithubEntityBase<MarketplacePurchase> {
    constructor(client: GithubSDK, entopts: any);
    make(this: MarketplacePurchaseEntity): MarketplacePurchaseEntity;
    load(this: any, reqmatch?: MarketplacePurchaseLoadMatch, ctrl?: Control): Promise<MarketplacePurchaseEntity>;
    list(this: any, reqmatch?: MarketplacePurchaseListMatch, ctrl?: Control): Promise<MarketplacePurchaseEntity[]>;
}
export { MarketplacePurchaseEntity };
