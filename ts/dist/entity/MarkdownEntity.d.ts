import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Markdown, MarkdownCreateData } from '../GithubTypes';
declare class MarkdownEntity extends GithubEntityBase<Markdown> {
    constructor(client: GithubSDK, entopts: any);
    make(this: MarkdownEntity): MarkdownEntity;
    create(this: any, reqdata?: MarkdownCreateData, ctrl?: Control): Promise<MarkdownEntity>;
}
export { MarkdownEntity };
