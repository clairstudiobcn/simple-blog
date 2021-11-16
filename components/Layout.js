import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer'

import styles from '../styles/Site.module.css'

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className={styles.layout}>
        <Header />
        <main>
          {children}
          <Footer />
        </main>
      </div>
    </>
  )
}
