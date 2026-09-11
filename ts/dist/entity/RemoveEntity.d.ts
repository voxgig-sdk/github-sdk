import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Remove, RemoveCreateData } from '../GithubTypes';
declare class RemoveEntity extends GithubEntityBase<Remove> {
    constructor(client: GithubSDK, entopts: any);
    make(this: RemoveEntity): RemoveEntity;
    create(this: any, reqdata?: RemoveCreateData, ctrl?: Control): Promise<RemoveEntity>;
}
export { RemoveEntity };
