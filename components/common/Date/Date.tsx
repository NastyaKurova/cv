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
      <time dateTime={dateWithTime.date}>
        <span>{dateWithTime.date}</span>
        <FontAwesomeIcon icon={faCircle} className={styles.dateIco} />
        <span>{dateWithTime.time}</span>
      </time>
    )
  return <span>{date}</span>
}
