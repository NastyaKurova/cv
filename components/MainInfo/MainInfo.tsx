import useTranslation from 'next-translate/useTranslation'
import styles from './MainInfo.module.scss'
import cn from 'classnames'
import { ContactsSection } from '../NumbersSecction/ContactsSection'
import { KnowledgeSection } from '../KnowledgeSection/KnowledgeSection'
import { ExperienceSection } from '../ExperienceSection/ExperienceSection'
import { EducationSection } from '../EducationSection/EducationSection'

export function MainInfo() {
  const { t } = useTranslation()
  return (
    <section className={cn('container')}>
      <div className={styles.section}>
        <div className={styles.contactsBlock}>
          <ContactsSection />
          <KnowledgeSection />
        </div>
        <div className={styles.infoBlock}>
          <div className={styles.aboutMe}>
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
