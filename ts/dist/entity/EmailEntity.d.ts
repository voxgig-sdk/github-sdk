import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Email, EmailListMatch, EmailCreateData, EmailUpdateData } from '../GithubTypes';
declare class EmailEntity extends GithubEntityBase<Email> {
    constructor(client: GithubSDK, entopts: any);
    make(this: EmailEntity): EmailEntity;
    list(this: any, reqmatch?: EmailListMatch, ctrl?: Control): Promise<EmailEntity[]>;
    create(this: any, reqdata?: EmailCreateData, ctrl?: Control): Promise<EmailEntity>;
    update(this: any, reqdata?: EmailUpdateData, ctrl?: Control): Promise<EmailEntity>;
}
export { EmailEntity };
