import React, { useState, useEffect, FC, ReactNode } from 'react'
import { ThemeContext, themes } from './ThemeContext'

const ThemeContextWrapper: FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<string>(themes.light)

  function changeTheme(theme: string) {
    setTheme(theme)
  }

  useEffect(() => {
    switch (theme) {
      case themes.dark:
        return document.documentElement.setAttribute('theme', 'dark')
      case themes.light:
      default:
        return document.documentElement.removeAttribute('theme')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme: theme, changeTheme: changeTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}
export default ThemeContextWrapper
