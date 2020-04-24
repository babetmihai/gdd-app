import React from 'react'
import styles from './index.module.scss'

export default function Page(props) {

  const { children, sidebar } = props

  return (
    <div className={styles.page}>
      <div className={styles.sidebar}>
        {sidebar}
      </div>
      <div className={styles.content}>
        <div className={styles.children}>
          {children}
        </div>
      </div>
    </div>
  )
}