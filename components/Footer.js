import Link from 'next/link'
import {YEAR, TITLE, DESCRIPTION} from '../lib/constants'
import styles from '../styles/Site.module.css'

const ExternalLink = ({ href, children }) => (
    <a
      className="ext_link"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
    {children}
  </a>
);

export default function Footer() {
  return (
      <div className={styles.footer}>
        <p>
          <Link href="/"><a>{TITLE}</a></Link> &mdash; <i>{DESCRIPTION}</i><br></br>
          &copy; {YEAR} <ExternalLink href="https://github.com/narmanguebraun">N.A.B</ExternalLink>. This site is built with Next.js and Markdown.
        </p>
      </div>
    )
}
