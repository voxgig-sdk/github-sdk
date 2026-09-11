
const { inspect } = require('node:util')

const { GithubEntityBase } = require('../GithubEntityBase')


// TODO: needs Entity superclass
class SimpleClassroomEntity extends GithubEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'simple_classroom'
    this.name_ = 'simple_classroom'
    this.Name = 'SimpleClassroom'
  }


  make() {
    return new SimpleClassroomEntity(this._client, this.entopts())
  }







}


module.exports = {
  SimpleClassroomEntity
}
