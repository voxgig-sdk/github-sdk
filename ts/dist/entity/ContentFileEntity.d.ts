import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ContentFile, ContentFileLoadMatch } from '../GithubTypes';
declare class ContentFileEntity extends GithubEntityBase<ContentFile> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ContentFileEntity): ContentFileEntity;
    load(this: any, reqmatch?: ContentFileLoadMatch, ctrl?: Control): Promise<ContentFileEntity>;
}
export { ContentFileEntity };
