import { Theme } from '@/types/Theme'

export interface ConfigState {
  theme: Theme
}

export const configState: ConfigState = {
  theme: Theme.Light
}
