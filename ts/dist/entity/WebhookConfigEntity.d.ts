import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { WebhookConfig, WebhookConfigLoadMatch, WebhookConfigUpdateData } from '../GithubTypes';
declare class WebhookConfigEntity extends GithubEntityBase<WebhookConfig> {
    constructor(client: GithubSDK, entopts: any);
    make(this: WebhookConfigEntity): WebhookConfigEntity;
    load(this: any, reqmatch?: WebhookConfigLoadMatch, ctrl?: Control): Promise<WebhookConfigEntity>;
    update(this: any, reqdata?: WebhookConfigUpdateData, ctrl?: Control): Promise<WebhookConfigEntity>;
}
export { WebhookConfigEntity };
