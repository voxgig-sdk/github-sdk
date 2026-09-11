import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Emoji, EmojiLoadMatch } from '../GithubTypes';
declare class EmojiEntity extends GithubEntityBase<Emoji> {
    constructor(client: GithubSDK, entopts: any);
    make(this: EmojiEntity): EmojiEntity;
    load(this: any, reqmatch?: EmojiLoadMatch, ctrl?: Control): Promise<EmojiEntity>;
}
export { EmojiEntity };
