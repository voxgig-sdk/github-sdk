import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { TagProtection, TagProtectionListMatch, TagProtectionCreateData } from '../GithubTypes';
declare class TagProtectionEntity extends GithubEntityBase<TagProtection> {
    constructor(client: GithubSDK, entopts: any);
    make(this: TagProtectionEntity): TagProtectionEntity;
    list(this: any, reqmatch?: TagProtectionListMatch, ctrl?: Control): Promise<TagProtectionEntity[]>;
    create(this: any, reqdata?: TagProtectionCreateData, ctrl?: Control): Promise<TagProtectionEntity>;
}
export { TagProtectionEntity };
