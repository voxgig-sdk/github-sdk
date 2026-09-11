import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ProtectedBranch, ProtectedBranchUpdateData } from '../GithubTypes';
declare class ProtectedBranchEntity extends GithubEntityBase<ProtectedBranch> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ProtectedBranchEntity): ProtectedBranchEntity;
    update(this: any, reqdata?: ProtectedBranchUpdateData, ctrl?: Control): Promise<ProtectedBranchEntity>;
}
export { ProtectedBranchEntity };
