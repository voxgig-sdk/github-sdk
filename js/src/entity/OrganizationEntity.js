
const { inspect } = require('node:util')

const { GithubEntityBase } = require('../GithubEntityBase')


// TODO: needs Entity superclass
class OrganizationEntity extends GithubEntityBase {

  constructor(client, entopts) {
    super(client, entopts)
    this.name = 'organization'
    this.name_ = 'organization'
    this.Name = 'Organization'
  }


  make() {
    return new OrganizationEntity(this._client, this.entopts())
  }







}


module.exports = {
  OrganizationEntity
}
