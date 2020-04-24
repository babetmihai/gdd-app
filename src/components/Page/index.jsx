import React from 'react'
import styles from './index.module.scss'
import { Card } from 'react-bootstrap'

export default function Page(props) {
  const { children, sidebar } = props

  return (
    <div className={styles.page}>
      {sidebar &&
        <Card className={styles.sidebar}>
          {sidebar}
        </Card>
      }
      <div className={styles.content}>
        <Card className={styles.children}>
          {children}
        </Card >
      </div>
    </div>
  )
}