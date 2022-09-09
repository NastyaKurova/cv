import useTranslation from 'next-translate/useTranslation'
import styles from './EducationSection.module.scss'
import { FC } from 'react'
import cn from 'classnames'
import { Date } from '../common/Date/Date'

type university = {
  name: string
  profession: string
  date: string
  activities?: string
}

export const EducationSection: FC = () => {
  const { t } = useTranslation()
  const universities: university[] = [
    {
      name: t('common:EducationTechUniM'),
      profession: t('common:EducationTechUniMProf'),
      date: t('common:EducationTechUniMTime'),
    },
    {
      name: t('common:EducationTechUniM'),
      profession: t('common:EducationTechUniBProf'),
      date: t('common:EducationTechUniBTime'),
      activities: t('common:EducationTechUniBDo'),
    },
    {
      name: t('common:EducationLangUni'),
      profession: t('common:EducationLangUniProf'),
      date: t('common:EducationLangUniTime'),
    },
  ]

  return (
    <div className="position-relative">
      <div className="border-dot border-dot-color"></div>
      <h3>{t('common:EducationHeader')}</h3>
      {universities.map((university, index) => (
        <University key={index} university={university} />
      ))}
    </div>
  )
}

const University: FC<{ university: university }> = ({ university }) => {
  return (
    <div>
      <h4 className={styles.universityHeader}>{university.name}</h4>
      <div>{university.profession}</div>
      <div className={cn(styles.universityDate, 'date-color')}>
        <Date date={university.date} />
      </div>
      {university.activities ? <div>{university.activities}</div> : null}
    </div>
  )
}
