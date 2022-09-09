import Link from 'next/link'
import styles from './Header.module.scss'
import cn from 'classnames'
import { useRouter } from 'next/router'
import { ThemeButton } from '../ThemeButton/ThemeButton'

const localeEng = 'en-US'
const localeRu = 'ru-Ru'

export function Header() {
  const router = useRouter()
  return (
    <header className={cn(styles.header, 'header-color')}>
      <div className={cn('container', styles.container)}>
        <ThemeButton />
        <Link href="/" locale="en-US">
          <a
            className={cn(
              styles.link,
              router.locale === localeEng ? 'link-active' : 'link-color'
            )}>
            Eng
          </a>
        </Link>
        <span className={styles.linkDef}> | </span>
        <Link href="/" locale="ru-Ru">
          <a
            className={cn(
              styles.link,
              router.locale === localeRu ? 'link-active' : 'link-color'
            )}>
            Ru
          </a>
        </Link>
      </div>
    </header>
  )
}
