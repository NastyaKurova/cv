import styles from './KnowledgeSection.module.scss'
import useTranslation from 'next-translate/useTranslation'

export function KnowledgeSection() {
  const { t } = useTranslation()

  return (
    <>
      <div>
        <h3>{t('common:skillsHeader')}</h3>
        <div className={styles.knowledge}> TypeScript | JavaScript</div>
        <div className={styles.knowledge}> React | Redux | Next</div>
        <div className={styles.knowledge}>Jest | React Testing Library</div>
        <div className={styles.knowledge}>HTML | CSS | SCSS | Less</div>
        <div className={styles.knowledge}>Nodejs | Express</div>
        <div className={styles.knowledge}>
          Webpack | Git | MongoDB | Docker | Rundeck | Jenkins
        </div>
      </div>
      <div>
        <h3>{t('common:langHeader')}</h3>
        <div className={styles.knowledge}>
          <span>{t('common:langEng')}</span>:{' '}
          <span>{t('common:langEngLevel')}</span>
        </div>
        <div className={styles.knowledge}>
          <span>{t('common:langRu')}</span>:{' '}
          <span>{t('common:langRuLevel')}</span>
        </div>
      </div>
    </>
  )
}
