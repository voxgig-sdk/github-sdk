import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { MarketplaceListingPlan, MarketplaceListingPlanListMatch } from '../GithubTypes';
declare class MarketplaceListingPlanEntity extends GithubEntityBase<MarketplaceListingPlan> {
    constructor(client: GithubSDK, entopts: any);
    make(this: MarketplaceListingPlanEntity): MarketplaceListingPlanEntity;
    list(this: any, reqmatch?: MarketplaceListingPlanListMatch, ctrl?: Control): Promise<MarketplaceListingPlanEntity[]>;
}
export { MarketplaceListingPlanEntity };
