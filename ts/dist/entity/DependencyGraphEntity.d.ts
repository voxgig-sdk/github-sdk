import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { DependencyGraph, DependencyGraphCreateData } from '../GithubTypes';
declare class DependencyGraphEntity extends GithubEntityBase<DependencyGraph> {
    constructor(client: GithubSDK, entopts: any);
    make(this: DependencyGraphEntity): DependencyGraphEntity;
    create(this: any, reqdata?: DependencyGraphCreateData, ctrl?: Control): Promise<DependencyGraphEntity>;
}
export { DependencyGraphEntity };
