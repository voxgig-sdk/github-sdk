import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Autolink, AutolinkLoadMatch, AutolinkListMatch, AutolinkCreateData } from '../GithubTypes';
declare class AutolinkEntity extends GithubEntityBase<Autolink> {
    constructor(client: GithubSDK, entopts: any);
    make(this: AutolinkEntity): AutolinkEntity;
    load(this: any, reqmatch?: AutolinkLoadMatch, ctrl?: Control): Promise<AutolinkEntity>;
    list(this: any, reqmatch?: AutolinkListMatch, ctrl?: Control): Promise<AutolinkEntity[]>;
    create(this: any, reqdata?: AutolinkCreateData, ctrl?: Control): Promise<AutolinkEntity>;
}
export { AutolinkEntity };
