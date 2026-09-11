import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { ActionsArtifactAndLogRetention, ActionsArtifactAndLogRetentionLoadMatch } from '../GithubTypes';
declare class ActionsArtifactAndLogRetentionEntity extends GithubEntityBase<ActionsArtifactAndLogRetention> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ActionsArtifactAndLogRetentionEntity): ActionsArtifactAndLogRetentionEntity;
    load(this: any, reqmatch?: ActionsArtifactAndLogRetentionLoadMatch, ctrl?: Control): Promise<ActionsArtifactAndLogRetentionEntity>;
}
export { ActionsArtifactAndLogRetentionEntity };
