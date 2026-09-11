import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Migration, MigrationLoadMatch, MigrationListMatch, MigrationCreateData, MigrationRemoveMatch } from '../GithubTypes';
declare class MigrationEntity extends GithubEntityBase<Migration> {
    constructor(client: GithubSDK, entopts: any);
    make(this: MigrationEntity): MigrationEntity;
    load(this: any, reqmatch?: MigrationLoadMatch, ctrl?: Control): Promise<MigrationEntity>;
    list(this: any, reqmatch?: MigrationListMatch, ctrl?: Control): Promise<MigrationEntity[]>;
    create(this: any, reqdata?: MigrationCreateData, ctrl?: Control): Promise<MigrationEntity>;
    remove(this: any, reqmatch?: MigrationRemoveMatch, ctrl?: Control): Promise<MigrationEntity>;
}
export { MigrationEntity };
