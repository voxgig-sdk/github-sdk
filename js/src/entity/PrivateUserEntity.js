
const { inspect } = require('node:util')

const { GithubEntityBase } = require('../GithubEntityBase')


// TODO: needs Entity superclass
class PrivateUserEntity extends GithubEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'private_user'
    this.name_ = 'private_user'
    this.Name = 'PrivateUser'
  }


  make() {
    return new PrivateUserEntity(this._client, this.entopts())
  }







}


module.exports = {
  PrivateUserEntity
}
