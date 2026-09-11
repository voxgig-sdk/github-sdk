import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Add, AddCreateData } from '../GithubTypes';
declare class AddEntity extends GithubEntityBase<Add> {
    constructor(client: GithubSDK, entopts: any);
    make(this: AddEntity): AddEntity;
    create(this: any, reqdata?: AddCreateData, ctrl?: Control): Promise<AddEntity>;
}
export { AddEntity };
