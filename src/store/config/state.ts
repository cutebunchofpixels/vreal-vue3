import { Theme } from '@/types/Theme'
import { inferTheme } from '@/utils/inferTheme'

export interface ConfigState {
  theme: Theme
}

const persistedTheme = inferTheme()

export const configState: ConfigState = {
  theme: persistedTheme
}
