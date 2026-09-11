import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { DependencyGraphDiff, DependencyGraphDiffLoadMatch } from '../GithubTypes';
declare class DependencyGraphDiffEntity extends GithubEntityBase<DependencyGraphDiff> {
    constructor(client: GithubSDK, entopts: any);
    make(this: DependencyGraphDiffEntity): DependencyGraphDiffEntity;
    load(this: any, reqmatch?: DependencyGraphDiffLoadMatch, ctrl?: Control): Promise<DependencyGraphDiffEntity>;
}
export { DependencyGraphDiffEntity };
