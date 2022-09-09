import { ThemeContext, themes } from '../../context/ThemeContext'
import { useState } from 'react'
import styles from './ThemeButton.module.scss'
import cn from 'classnames'

export function ThemeButton() {
  const [lightMode, setLightMode] = useState(true)

  type changeThemeType = (theme: string) => void
  const onThemeChange = (changeTheme: changeThemeType) => {
    setLightMode(!lightMode)
    changeTheme(lightMode ? themes.dark : themes.light)
  }
  return (
    <div className={styles.themeButton}>
      <ThemeContext.Consumer>
        {({ changeTheme }) => (
          <label className={styles.switch}>
            <input
              type="checkbox"
              onChange={() => onThemeChange(changeTheme)}
            />
            <span className={cn(styles.slider, styles.rounded)}></span>
          </label>
        )}
      </ThemeContext.Consumer>
    </div>
  )
}
