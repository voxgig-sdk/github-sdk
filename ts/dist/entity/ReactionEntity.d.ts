import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Reaction, ReactionListMatch, ReactionCreateData, ReactionRemoveMatch } from '../GithubTypes';
declare class ReactionEntity extends GithubEntityBase<Reaction> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ReactionEntity): ReactionEntity;
    list(this: any, reqmatch?: ReactionListMatch, ctrl?: Control): Promise<ReactionEntity[]>;
    create(this: any, reqdata?: ReactionCreateData, ctrl?: Control): Promise<ReactionEntity>;
    remove(this: any, reqmatch?: ReactionRemoveMatch, ctrl?: Control): Promise<ReactionEntity>;
}
export { ReactionEntity };
