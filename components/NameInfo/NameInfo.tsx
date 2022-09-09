import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import styles from './NameInfo.module.scss'
import photo from '../../public/photo_resume.jpg'
import cn from 'classnames'
import { FC } from 'react'

export const NameInfo: FC = () => {
  const { t } = useTranslation()
  return (
    <section className={cn('container')}>
      <div className={styles.section}>
        <div className={styles.photoBlock}>
          <div className={styles.photo}>
            <Image src={photo} placeholder="blur" alt="Photo of Nastya" />
          </div>
        </div>
        <div className={styles.nameBlock}>
          <h1 className={styles.textCenter}>{t('common:name')}</h1>
          <h2 className={cn(styles.textCenter, styles.profession)}>
            {t('common:profession')}
          </h2>
        </div>
      </div>
    </section>
  )
}
