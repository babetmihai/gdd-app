import React from 'react'
import styles from './index.module.scss'

export default function Home({ id }) {
  return (
    <div className={styles.home}>
      {id}
    </div>
  )
}