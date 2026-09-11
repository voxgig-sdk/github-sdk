import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Tag, TagListMatch } from '../GithubTypes';
declare class TagEntity extends GithubEntityBase<Tag> {
    constructor(client: GithubSDK, entopts: any);
    make(this: TagEntity): TagEntity;
    list(this: any, reqmatch?: TagListMatch, ctrl?: Control): Promise<TagEntity[]>;
}
export { TagEntity };
