import styles from './ContactsSection.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faEnvelope,
  faLink,
  faLocationDot,
  faPhone,
} from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import useTranslation from 'next-translate/useTranslation'

export function ContactsSection() {
  const { t } = useTranslation()

  return (
    <>
      <div className={styles.contact}>
        <FontAwesomeIcon icon={faLocationDot} className={styles.contactIco} />
        {t('common:place')}
      </div>

      <div className={styles.contact}>
        <Link href="mailto:kyrova.nastia@gmail.com">
          <a>
            <FontAwesomeIcon icon={faEnvelope} className={styles.contactIco} />
            kyrova.nastia@gmail.com
          </a>
        </Link>
      </div>

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
          <a>
            <FontAwesomeIcon icon={faLink} className={styles.contactIco} />
            LinkedIn
          </a>
        </Link>
      </div>

      <div className={styles.contact}>
        <Link href="https://t.me/a_kurova">
          <a>
            <FontAwesomeIcon icon={faLink} className={styles.contactIco} />
            Telegram: @a_kurova
          </a>
        </Link>
      </div>
    </>
  )
}
