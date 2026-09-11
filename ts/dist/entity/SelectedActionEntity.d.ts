import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { SelectedAction, SelectedActionListMatch } from '../GithubTypes';
declare class SelectedActionEntity extends GithubEntityBase<SelectedAction> {
    constructor(client: GithubSDK, entopts: any);
    make(this: SelectedActionEntity): SelectedActionEntity;
    list(this: any, reqmatch?: SelectedActionListMatch, ctrl?: Control): Promise<SelectedActionEntity[]>;
}
export { SelectedActionEntity };
