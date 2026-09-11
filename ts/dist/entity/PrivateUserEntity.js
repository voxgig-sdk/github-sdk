"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrivateUserEntity = void 0;
const GithubEntityBase_1 = require("../GithubEntityBase");
// TODO: needs Entity superclass
class PrivateUserEntity extends GithubEntityBase_1.GithubEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'private_user';
        this.name_ = 'private_user';
        this.Name = 'PrivateUser';
    }
    make() {
        return new PrivateUserEntity(this._client, this.entopts());
    }
}
exports.PrivateUserEntity = PrivateUserEntity;
//# sourceMappingURL=PrivateUserEntity.js.map