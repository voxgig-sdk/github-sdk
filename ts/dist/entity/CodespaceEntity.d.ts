import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Codespace, CodespaceLoadMatch, CodespaceListMatch, CodespaceCreateData, CodespaceUpdateData, CodespaceRemoveMatch } from '../GithubTypes';
declare class CodespaceEntity extends GithubEntityBase<Codespace> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CodespaceEntity): CodespaceEntity;
    load(this: any, reqmatch?: CodespaceLoadMatch, ctrl?: Control): Promise<CodespaceEntity>;
    list(this: any, reqmatch?: CodespaceListMatch, ctrl?: Control): Promise<CodespaceEntity[]>;
    create(this: any, reqdata?: CodespaceCreateData, ctrl?: Control): Promise<CodespaceEntity>;
    update(this: any, reqdata?: CodespaceUpdateData, ctrl?: Control): Promise<CodespaceEntity>;
    remove(this: any, reqmatch?: CodespaceRemoveMatch, ctrl?: Control): Promise<CodespaceEntity>;
}
export { CodespaceEntity };
