import React from 'react'
import styles from './index.module.scss'
import { Typography } from '@material-ui/core'

export default function Home() {
  return (
    <div className={styles.form}>
      <Typography variant="h2">Form</Typography>
    </div>
  )
}