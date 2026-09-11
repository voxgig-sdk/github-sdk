import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ContentTraffic, ContentTrafficListMatch } from '../GithubTypes';
declare class ContentTrafficEntity extends GithubEntityBase<ContentTraffic> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ContentTrafficEntity): ContentTrafficEntity;
    list(this: any, reqmatch?: ContentTrafficListMatch, ctrl?: Control): Promise<ContentTrafficEntity[]>;
}
export { ContentTrafficEntity };
