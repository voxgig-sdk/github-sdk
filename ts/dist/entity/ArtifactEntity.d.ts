import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Artifact, ArtifactLoadMatch } from '../GithubTypes';
declare class ArtifactEntity extends GithubEntityBase<Artifact> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ArtifactEntity): ArtifactEntity;
    load(this: any, reqmatch?: ArtifactLoadMatch, ctrl?: Control): Promise<ArtifactEntity>;
}
export { ArtifactEntity };
