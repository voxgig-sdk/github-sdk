import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { PorterLargeFile, PorterLargeFileListMatch } from '../GithubTypes';
declare class PorterLargeFileEntity extends GithubEntityBase<PorterLargeFile> {
    constructor(client: GithubSDK, entopts: any);
    make(this: PorterLargeFileEntity): PorterLargeFileEntity;
    list(this: any, reqmatch?: PorterLargeFileListMatch, ctrl?: Control): Promise<PorterLargeFileEntity[]>;
}
export { PorterLargeFileEntity };
