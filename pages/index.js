import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import Layout from '../components/Layout'
import styles from '../styles/Site.module.css'

import { TITLE, DESCRIPTION, URL, HOME_OG_IMAGE_URL } from '../lib/constants'
import { getAllPosts } from '../lib/api'

import Meta from '../components/Meta'
import AllPosts from '../components/AllPosts'

export default function Home({ allPosts }) {
  return (
    <Layout>
      <main className={styles.main}>
        <section className={styles.section}>
          <AllPosts posts={ allPosts } />
        </section>
      </main>
    </Layout>
  )
}

export async function getStaticProps() {
  const allPosts = getAllPosts([
    'title',
    'date',
    'tag',
    'slug',
    'coverImage',
    'excerpt'
  ])

  return {
    props: { allPosts },
  }
}
