"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SimpleClassroomEntity = void 0;
const GithubEntityBase_1 = require("../GithubEntityBase");
// TODO: needs Entity superclass
class SimpleClassroomEntity extends GithubEntityBase_1.GithubEntityBase {
    constructor(client, entopts) {
        super(client, entopts);
        this.name = 'simple_classroom';
        this.name_ = 'simple_classroom';
        this.Name = 'SimpleClassroom';
    }
    make() {
        return new SimpleClassroomEntity(this._client, this.entopts());
    }
}
exports.SimpleClassroomEntity = SimpleClassroomEntity;
//# sourceMappingURL=SimpleClassroomEntity.js.map