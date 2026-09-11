import { GithubEntityBase } from '../GithubEntityBase';
import type { GithubSDK } from '../GithubSDK';
import type { Control } from '../types';
import type { Copilot, CopilotLoadMatch, CopilotListMatch, CopilotCreateData, CopilotRemoveMatch } from '../GithubTypes';
declare class CopilotEntity extends GithubEntityBase<Copilot> {
    constructor(client: GithubSDK, entopts: any);
    make(this: CopilotEntity): CopilotEntity;
    load(this: any, reqmatch?: CopilotLoadMatch, ctrl?: Control): Promise<CopilotEntity>;
    list(this: any, reqmatch?: CopilotListMatch, ctrl?: Control): Promise<CopilotEntity[]>;
    create(this: any, reqdata?: CopilotCreateData, ctrl?: Control): Promise<CopilotEntity>;
    remove(this: any, reqmatch?: CopilotRemoveMatch, ctrl?: Control): Promise<CopilotEntity>;
}
export { CopilotEntity };
