import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { OutsideCollaborator, OutsideCollaboratorListMatch } from '../GithubTypes';
declare class OutsideCollaboratorEntity extends GithubEntityBase<OutsideCollaborator> {
    constructor(client: GithubSDK, entopts: any);
    make(this: OutsideCollaboratorEntity): OutsideCollaboratorEntity;
    list(this: any, reqmatch?: OutsideCollaboratorListMatch, ctrl?: Control): Promise<OutsideCollaboratorEntity[]>;
}
export { OutsideCollaboratorEntity };
