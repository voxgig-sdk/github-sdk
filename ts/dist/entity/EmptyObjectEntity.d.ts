import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { EmptyObject, EmptyObjectLoadMatch, EmptyObjectCreateData, EmptyObjectUpdateData } from '../GithubTypes';
declare class EmptyObjectEntity extends GithubEntityBase<EmptyObject> {
    constructor(client: GithubSDK, entopts: any);
    make(this: EmptyObjectEntity): EmptyObjectEntity;
    load(this: any, reqmatch?: EmptyObjectLoadMatch, ctrl?: Control): Promise<EmptyObjectEntity>;
    create(this: any, reqdata?: EmptyObjectCreateData, ctrl?: Control): Promise<EmptyObjectEntity>;
    update(this: any, reqdata?: EmptyObjectUpdateData, ctrl?: Control): Promise<EmptyObjectEntity>;
}
export { EmptyObjectEntity };
