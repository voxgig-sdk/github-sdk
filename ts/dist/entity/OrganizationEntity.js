"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OrganizationEntity = void 0;
const GithubEntityBase_1 = require("../GithubEntityBase");
// TODO: needs Entity superclass
class OrganizationEntity extends GithubEntityBase_1.GithubEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'organization';
        this.name_ = 'organization';
        this.Name = 'Organization';
    }
    make() {
        return new OrganizationEntity(this._client, this.entopts());
    }
}
exports.OrganizationEntity = OrganizationEntity;
//# sourceMappingURL=OrganizationEntity.js.map