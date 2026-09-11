import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { PublicMember, PublicMemberListMatch } from '../GithubTypes';
declare class PublicMemberEntity extends GithubEntityBase<PublicMember> {
    constructor(client: GithubSDK, entopts: any);
    make(this: PublicMemberEntity): PublicMemberEntity;
    list(this: any, reqmatch?: PublicMemberListMatch, ctrl?: Control): Promise<PublicMemberEntity[]>;
}
export { PublicMemberEntity };
