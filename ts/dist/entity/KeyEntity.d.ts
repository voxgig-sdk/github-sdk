import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Key, KeyLoadMatch, KeyListMatch, KeyCreateData } from '../GithubTypes';
declare class KeyEntity extends GithubEntityBase<Key> {
    constructor(client: GithubSDK, entopts: any);
    make(this: KeyEntity): KeyEntity;
    load(this: any, reqmatch?: KeyLoadMatch, ctrl?: Control): Promise<KeyEntity>;
    list(this: any, reqmatch?: KeyListMatch, ctrl?: Control): Promise<KeyEntity[]>;
    create(this: any, reqdata?: KeyCreateData, ctrl?: Control): Promise<KeyEntity>;
}
export { KeyEntity };
