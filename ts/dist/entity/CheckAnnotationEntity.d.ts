import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { CheckAnnotation, CheckAnnotationListMatch } from '../GithubTypes';
declare class CheckAnnotationEntity extends GithubEntityBase<CheckAnnotation> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CheckAnnotationEntity): CheckAnnotationEntity;
    list(this: any, reqmatch?: CheckAnnotationListMatch, ctrl?: Control): Promise<CheckAnnotationEntity[]>;
}
export { CheckAnnotationEntity };
