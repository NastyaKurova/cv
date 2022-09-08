import Link from 'next/link'
import styles from './Header.module.scss'
import cn from 'classnames'

export function Header() {
  return (
    <header className={styles.header}>
      <div className={cn('container', styles.container)}>
        <Link href="/" locale="en-US">
          <a className={styles.link}>Eng</a>
        </Link>
        <span className={styles.linkDef}> | </span>
        <Link href="/" locale="ru-Ru">
          <a className={styles.link}>Ru</a>
        </Link>
      </div>
    </header>
  )
}
