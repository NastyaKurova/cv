import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import styles from './Date.module.scss'
import { FC } from 'react'

type DateTYpe = {
  date?: string
  dateWithTime?: { date?: string; time: string }
}

export const Date: FC<DateTYpe> = ({ date, dateWithTime }) => {
  if (dateWithTime)
    return (
      <>
        <span>{dateWithTime.date}</span>
        <FontAwesomeIcon icon={faCircle} className={styles.dateIco} />
        <span>{dateWithTime.time}</span>
      </>
    )
  return <span>{date}</span>
}
