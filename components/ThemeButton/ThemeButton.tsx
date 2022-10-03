import { ThemeContext, themes } from '../../context/ThemeContext'
import { FC, useState } from 'react'
import styles from './ThemeButton.module.scss'
import cn from 'classnames'

export const ThemeButton: FC = () => {
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
          <label className={styles.switch} htmlFor="cb-slider">
            <input
              id="cb-slider"
              type="checkbox"
              onChange={() => onThemeChange(changeTheme)}
            />
            <span className={styles.slider}></span>
          </label>
        )}
      </ThemeContext.Consumer>
    </div>
  )
}
