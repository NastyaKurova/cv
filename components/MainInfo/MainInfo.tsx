import useTranslation from 'next-translate/useTranslation'
import styles from './MainInfo.module.scss'
import cn from 'classnames'

export function MainInfo() {
  const { t } = useTranslation()
  return (
    <section className={cn('container')}>
      <div className={styles.section}>
        <div className={styles.contactsBlock}></div>
        <div className={styles.infoBlock}>
          <div className={styles.aboutMe}>
            <h3>{t('common:nameInfoHeader')}</h3>
            <div>{t('common:about')}</div>
          </div>
        </div>
      </div>
    </section>
  )
}
