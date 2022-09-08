import Link from 'next/link'
import styles from './Header.module.scss'
import cn from 'classnames'
import { useRouter } from 'next/router'

const localeEng = 'en-US'
const localeRu = 'ru-Ru'

export function Header() {
  const router = useRouter()

  return (
    <header className={styles.header}>
      <div className={cn('container', styles.container)}>
        <Link href="/" locale="en-US">
          <a
            className={cn(styles.link, {
              [styles.linkActive]: router.locale === localeEng,
            })}>
            Eng
          </a>
        </Link>
        <span className={styles.linkDef}> | </span>
        <Link href="/" locale="ru-Ru">
          <a
            className={cn(styles.link, {
              [styles.linkActive]: router.locale === localeRu,
            })}>
            Ru
          </a>
        </Link>
      </div>
    </header>
  )
}
