import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Topic, TopicListMatch, TopicUpdateData } from '../GithubTypes';
declare class TopicEntity extends GithubEntityBase<Topic> {
    constructor(client: GithubSDK, entopts: any);
    make(this: TopicEntity): TopicEntity;
    list(this: any, reqmatch?: TopicListMatch, ctrl?: Control): Promise<TopicEntity[]>;
    update(this: any, reqdata?: TopicUpdateData, ctrl?: Control): Promise<TopicEntity>;
}
export { TopicEntity };
