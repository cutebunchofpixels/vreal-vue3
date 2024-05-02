import { Gender } from './Gender'
import { Status } from './Status'

export interface GorestUser {
  id: number
  name: string
  email: string
  gender: Gender
  status: Status
}
