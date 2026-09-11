import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { DependencyGraphSpdxSbom, DependencyGraphSpdxSbomLoadMatch } from '../GithubTypes';
declare class DependencyGraphSpdxSbomEntity extends GithubEntityBase<DependencyGraphSpdxSbom> {
    constructor(client: GithubSDK, entopts: any);
    make(this: DependencyGraphSpdxSbomEntity): DependencyGraphSpdxSbomEntity;
    load(this: any, reqmatch?: DependencyGraphSpdxSbomLoadMatch, ctrl?: Control): Promise<DependencyGraphSpdxSbomEntity>;
}
export { DependencyGraphSpdxSbomEntity };
