import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ReleaseNotesContent, ReleaseNotesContentCreateData } from '../GithubTypes';
declare class ReleaseNotesContentEntity extends GithubEntityBase<ReleaseNotesContent> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ReleaseNotesContentEntity): ReleaseNotesContentEntity;
    create(this: any, reqdata?: ReleaseNotesContentCreateData, ctrl?: Control): Promise<ReleaseNotesContentEntity>;
}
export { ReleaseNotesContentEntity };
