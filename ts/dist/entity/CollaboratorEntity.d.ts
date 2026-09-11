import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Collaborator, CollaboratorListMatch } from '../GithubTypes';
declare class CollaboratorEntity extends GithubEntityBase<Collaborator> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CollaboratorEntity): CollaboratorEntity;
    list(this: any, reqmatch?: CollaboratorListMatch, ctrl?: Control): Promise<CollaboratorEntity[]>;
}
export { CollaboratorEntity };
