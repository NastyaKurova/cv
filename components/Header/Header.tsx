import Link from 'next/link'
import styles from './Header.module.scss'
import cn from 'classnames'
import { useRouter } from 'next/router'
import { ThemeButton } from '../ThemeButton/ThemeButton'
import { FC } from 'react'

const localeEng = 'en-US'
const localeRu = 'ru-Ru'

export const Header: FC = () => {
  const router = useRouter()
  return (
    <header className={styles.header}>
      <div className={cn('container', styles.container)}>
        <ThemeButton />
        <Link href="/" locale="en-US">
          <a
            className={cn(
              styles.link,
              router.locale === localeEng ? styles.linkActive : styles.linkColor
            )}>
            Eng
          </a>
        </Link>
        <span className={styles.linkDef}> | </span>
        <Link href="/" locale="ru-Ru">
          <a
            className={cn(
              styles.link,
              router.locale === localeRu ? styles.linkActive : styles.linkColor
            )}>
            Ru
          </a>
        </Link>
      </div>
    </header>
  )
}
