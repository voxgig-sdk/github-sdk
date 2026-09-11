import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { InteractionLimit, InteractionLimitUpdateData } from '../GithubTypes';
declare class InteractionLimitEntity extends GithubEntityBase<InteractionLimit> {
    constructor(client: GithubSDK, entopts: any);
    make(this: InteractionLimitEntity): InteractionLimitEntity;
    update(this: any, reqdata?: InteractionLimitUpdateData, ctrl?: Control): Promise<InteractionLimitEntity>;
}
export { InteractionLimitEntity };
