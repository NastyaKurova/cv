import { createContext } from 'react'

export const themes = {
  dark: 'dark-theme',
  light: '',
}
type ThemeContextType = { theme: string; changeTheme: (theme: string) => void }

export const ThemeContext = createContext<ThemeContextType>({
  theme: themes.light,
  changeTheme: () => {},
})
