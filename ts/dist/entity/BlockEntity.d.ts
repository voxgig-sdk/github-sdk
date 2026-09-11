import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Block, BlockListMatch } from '../GithubTypes';
declare class BlockEntity extends GithubEntityBase<Block> {
    constructor(client: GithubSDK, entopts: any);
    make(this: BlockEntity): BlockEntity;
    list(this: any, reqmatch?: BlockListMatch, ctrl?: Control): Promise<BlockEntity[]>;
}
export { BlockEntity };
