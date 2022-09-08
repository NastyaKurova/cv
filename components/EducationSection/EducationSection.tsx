import useTranslation from 'next-translate/useTranslation'
import styles from './EducationSection.module.scss'
import { FC } from 'react'

type university = {
  name: string
  profession: string
  date: string
  activities?: string
}

export function EducationSection() {
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
    <>
      <h3>{t('common:EducationHeader')}</h3>
      {universities.map((university, index) => (
        <University key={index} university={university} />
      ))}
    </>
  )
}

const University: FC<{ university: university }> = ({ university }) => {
  return (
    <div>
      <h4 className={styles.universityHeader}>{university.name}</h4>
      <div>{university.profession}</div>
      <div className={styles.universityDate}>{university.date}</div>
      {university.activities ? <div>{university.activities}</div> : null}
    </div>
  )
}
