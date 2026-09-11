
import { inspect } from 'node:util'

import { GithubEntityBase } from '../GithubEntityBase'

import type {
  GithubSDK,
} from '../GithubSDK'


import type {
  Operation,
  Context,
  Control,
} from '../types'

import type {
  Organization,
} from '../GithubTypes'

// TODO: needs Entity superclass
class OrganizationEntity extends GithubEntityBase<Organization> {

  constructor(client: GithubSDK, entopts: any) {
    super(client, entopts)
    this.name = 'organization'
    this.name_ = 'organization'
    this.Name = 'Organization'
  }


  make(this: OrganizationEntity) {
    return new OrganizationEntity(this._client, this.entopts())
  }







}


export {
  OrganizationEntity
}
