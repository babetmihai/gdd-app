import React from 'react'
import styles from './index.module.scss'

export default function Layout({ children }) {

  return (
    <div className={styles.layout}>
      <main className={styles.content}>
        <div className={styles.toolbar} />
        {children}
      </main>
    </div>

  )
}