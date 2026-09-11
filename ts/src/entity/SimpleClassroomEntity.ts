
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
  SimpleClassroom,
} from '../GithubTypes'

// TODO: needs Entity superclass
class SimpleClassroomEntity extends GithubEntityBase<SimpleClassroom> {

  constructor(client: GithubSDK, entopts: any) {
    super(client, entopts)
    this.name = 'simple_classroom'
    this.name_ = 'simple_classroom'
    this.Name = 'SimpleClassroom'
  }


  make(this: SimpleClassroomEntity) {
    return new SimpleClassroomEntity(this._client, this.entopts())
  }







}


export {
  SimpleClassroomEntity
}
