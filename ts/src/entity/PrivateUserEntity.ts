
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
  PrivateUser,
} from '../GithubTypes'

// TODO: needs Entity superclass
class PrivateUserEntity extends GithubEntityBase<PrivateUser> {

  constructor(client: GithubSDK, entopts: any) {
    super(client, entopts)
    this.name = 'private_user'
    this.name_ = 'private_user'
    this.Name = 'PrivateUser'
  }


  make(this: PrivateUserEntity) {
    return new PrivateUserEntity(this._client, this.entopts())
  }







}


export {
  PrivateUserEntity
}
