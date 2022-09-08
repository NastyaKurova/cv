import useTranslation from 'next-translate/useTranslation'
import { FC } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import styles from './ExperienceSection.module.scss'

type companyType = {
  profession: string
  name: string
  date: string
  time: string
  duties: Array<string>
}

export function ExperienceSection() {
  const { t } = useTranslation()
  const companies: companyType[] = [
    {
      profession: t('common:workKoshelekProfession'),
      name: t('common:workKoshelekName'),
      date: t('common:workKoshelekDate'),
      time: t('common:workKoshelekTime'),
      duties: [
        t('common:workKoshelekDuty1'),
        t('common:workKoshelekDuty2'),
        t('common:workKoshelekDuty3'),
        t('common:workKoshelekDuty4'),
        t('common:workKoshelekDuty5'),
        t('common:workKoshelekDuty6'),
        t('common:workKoshelekDuty7'),
        t('common:workKoshelekDuty8'),
        t('common:workKoshelekDuty9'),
      ],
    },
    {
      profession: t('common:workLBProfession'),
      name: t('common:workLBName'),
      date: t('common:workLBDate'),
      time: t('common:workLBTime'),
      duties: [t('common:workLBDuty')],
    },
    {
      profession: t('common:workWPProfession'),
      name: t('common:workWPName'),
      date: t('common:workWPDate'),
      time: t('common:workWPTime'),
      duties: [t('common:workWPDuty')],
    },
  ]

  return (
    <>
      <h3>{t('common:experienceHeader')}</h3>

      {companies.map((company: companyType, index: number) => (
        <Company key={index} company={company} />
      ))}
    </>
  )
}

const Company: FC<{ company: companyType }> = ({ company }) => {
  return (
    <div>
      <h4 className={styles.companyHeader}>{company.name}</h4>
      <div className={styles.date}>
        <span>{company.date}</span>
        <FontAwesomeIcon icon={faCircle} className={styles.dateIco} />
        <span>{company.time}</span>
      </div>
      <ul>
        {company.duties.map((duty: string, index: number) => (
          <li key={index}>{duty}</li>
        ))}
      </ul>
    </div>
  )
}
