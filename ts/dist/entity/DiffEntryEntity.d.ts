import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { DiffEntry, DiffEntryListMatch } from '../GithubTypes';
declare class DiffEntryEntity extends GithubEntityBase<DiffEntry> {
    constructor(client: GithubSDK, entopts: any);
    make(this: DiffEntryEntity): DiffEntryEntity;
    list(this: any, reqmatch?: DiffEntryListMatch, ctrl?: Control): Promise<DiffEntryEntity[]>;
}
export { DiffEntryEntity };
