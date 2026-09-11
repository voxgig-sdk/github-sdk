import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Label, LabelLoadMatch, LabelListMatch, LabelCreateData, LabelUpdateData } from '../GithubTypes';
declare class LabelEntity extends GithubEntityBase<Label> {
    constructor(client: GithubSDK, entopts: any);
    make(this: LabelEntity): LabelEntity;
    load(this: any, reqmatch?: LabelLoadMatch, ctrl?: Control): Promise<LabelEntity>;
    list(this: any, reqmatch?: LabelListMatch, ctrl?: Control): Promise<LabelEntity[]>;
    create(this: any, reqdata?: LabelCreateData, ctrl?: Control): Promise<LabelEntity>;
    update(this: any, reqdata?: LabelUpdateData, ctrl?: Control): Promise<LabelEntity>;
}
export { LabelEntity };
