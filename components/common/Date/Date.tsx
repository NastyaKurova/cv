import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import styles from './Date.module.scss'

type DateTYpe = {
  date?: string
  dateWithTime?: { date?: string; time: string }
}

export function Date({ date, dateWithTime }: DateTYpe) {
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
