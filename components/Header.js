import Link from 'next/link'
import {YEAR, TITLE, DESCRIPTION} from '../lib/constants'
import styles from '../styles/Site.module.css'

/* LIGHT-DARK MODE */
import { useTheme } from 'next-themes'

export default function Header() {
  const { theme, setTheme } = useTheme()

  return (
      <div className={styles.header}>
        <div>
          <h1><Link href="/"><a>{TITLE}</a></Link></h1>
        </div>
        <div className={styles.header_div}>
          <div className={styles.mode}>
            <button alt="Change Mode" className={styles.button_mode} onClick={() => {setTheme(theme === 'light' ? 'dark' : 'light')}}></button>
          </div>
        </div>
      </div>
    )
}
