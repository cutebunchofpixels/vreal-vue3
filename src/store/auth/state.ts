import type { User } from 'firebase/auth'

export interface AuthState {
  user: User | null
  isReady: boolean
}

export const authState: AuthState = {
  user: null,
  isReady: false
}
