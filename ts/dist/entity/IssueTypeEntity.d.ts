import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { IssueType, IssueTypeListMatch, IssueTypeCreateData, IssueTypeUpdateData } from '../GithubTypes';
declare class IssueTypeEntity extends GithubEntityBase<IssueType> {
    constructor(client: GithubSDK, entopts: any);
    make(this: IssueTypeEntity): IssueTypeEntity;
    list(this: any, reqmatch?: IssueTypeListMatch, ctrl?: Control): Promise<IssueTypeEntity[]>;
    create(this: any, reqdata?: IssueTypeCreateData, ctrl?: Control): Promise<IssueTypeEntity>;
    update(this: any, reqdata?: IssueTypeUpdateData, ctrl?: Control): Promise<IssueTypeEntity>;
}
export { IssueTypeEntity };
