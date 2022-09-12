import styles from './ContactsSection.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faLink,
  faLocationDot,
  faPhone,
  faCopy,
  faCheck,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'
import { FC, useState } from 'react'

export const ContactsSection: FC = () => {
  const { t } = useTranslation()
  const [isCoppied, setIsCoppied] = useState<boolean>(false)

  const handleClick = () => {
    setIsCoppied(true)
    navigator.clipboard.writeText(' kyrova.nastia@gmail.com')

    const TimerId = setTimeout(() => {
      setIsCoppied(false)
      clearTimeout(TimerId)
    }, 3000)
  }

  return (
    <>
      <address className={styles.contact}>
        <FontAwesomeIcon icon={faLocationDot} className={styles.contactIco} />
        {t('common:place')}
      </address>

      <address className={styles.contact}>
        <Link href="mailto:kyrova.nastia@gmail.com">
          <a>
            <FontAwesomeIcon icon={faEnvelope} className={styles.contactIco} />
            kyrova.nastia@gmail.com
          </a>
        </Link>
        {isCoppied ? (
          <FontAwesomeIcon icon={faCheck} className={styles.contactCopyIco} />
        ) : (
          <FontAwesomeIcon
            icon={faCopy}
            onClick={handleClick}
            className={styles.contactCopyIco}
          />
        )}
      </address>

      <div className={styles.contact}>
        <Link href="tel:+995591224336">
          <a>
            <FontAwesomeIcon icon={faPhone} className={styles.contactIco} />
            +995 591 22 43 36
          </a>
        </Link>
      </div>

      <div className={styles.contact}>
        <Link href="https://www.linkedin.com/in/anastasiya-kurova-758923242/">
          <a target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLink} className={styles.contactIco} />
            LinkedIn
          </a>
        </Link>
      </div>

      <div className={styles.contact}>
        <Link href="https://t.me/a_kurova">
          <a target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLink} className={styles.contactIco} />
            Telegram: @a_kurova
          </a>
        </Link>
      </div>
    </>
  )
}
