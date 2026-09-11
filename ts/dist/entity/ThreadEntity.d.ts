import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Thread, ThreadLoadMatch, ThreadListMatch, ThreadRemoveMatch } from '../GithubTypes';
declare class ThreadEntity extends GithubEntityBase<Thread> {
    constructor(client: GithubSDK, entopts: any);
    make(this: ThreadEntity): ThreadEntity;
    load(this: any, reqmatch?: ThreadLoadMatch, ctrl?: Control): Promise<ThreadEntity>;
    list(this: any, reqmatch?: ThreadListMatch, ctrl?: Control): Promise<ThreadEntity[]>;
    remove(this: any, reqmatch?: ThreadRemoveMatch, ctrl?: Control): Promise<ThreadEntity>;
}
export { ThreadEntity };
