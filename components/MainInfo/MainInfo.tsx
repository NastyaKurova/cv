import useTranslation from 'next-translate/useTranslation'
import styles from './MainInfo.module.scss'
import cn from 'classnames'
import { ContactsSection } from '../ContactsSection/ContactsSection'
import { KnowledgeSection } from '../KnowledgeSection/KnowledgeSection'
import { ExperienceSection } from '../ExperienceSection/ExperienceSection'
import { EducationSection } from '../EducationSection/EducationSection'
import { FC } from 'react'

export const MainInfo: FC = () => {
  const { t } = useTranslation()
  return (
    <section className={cn('container')}>
      <div className={styles.section}>
        <div className={styles.contactsBlock}>
          <ContactsSection />
          <KnowledgeSection />
        </div>
        <div className={cn(styles.infoBlock, 'border-split')}>
          <div className={cn(styles.aboutMe, 'position-relative')}>
            <div className="border-dot border-dot-color"></div>
            <h3 className={styles.aboutMeHeader}>
              {t('common:nameInfoHeader')}
            </h3>
            <div>{t('common:about')}</div>
          </div>
          <ExperienceSection />
          <EducationSection />
        </div>
      </div>
    </section>
  )
}
