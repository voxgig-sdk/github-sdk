import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { SecretScanningScanHistory, SecretScanningScanHistoryListMatch } from '../GithubTypes';
declare class SecretScanningScanHistoryEntity extends GithubEntityBase<SecretScanningScanHistory> {
    constructor(client: GithubSDK, entopts: any);
    make(this: SecretScanningScanHistoryEntity): SecretScanningScanHistoryEntity;
    list(this: any, reqmatch?: SecretScanningScanHistoryListMatch, ctrl?: Control): Promise<SecretScanningScanHistoryEntity[]>;
}
export { SecretScanningScanHistoryEntity };
