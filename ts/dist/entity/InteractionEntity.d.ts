import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Interaction, InteractionLoadMatch, InteractionRemoveMatch } from '../GithubTypes';
declare class InteractionEntity extends GithubEntityBase<Interaction> {
    constructor(client: GithubSDK, entopts: any);
    make(this: InteractionEntity): InteractionEntity;
    load(this: any, reqmatch?: InteractionLoadMatch, ctrl?: Control): Promise<InteractionEntity>;
    remove(this: any, reqmatch?: InteractionRemoveMatch, ctrl?: Control): Promise<InteractionEntity>;
}
export { InteractionEntity };
