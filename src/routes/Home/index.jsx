import React from 'react'
import styles from './index.module.scss'
import { Typography, Button } from '@material-ui/core'

export default function Home({ id }) {
  return (
    <div className={styles.home}>
      <Typography variant="h2">GDD Generator</Typography>
      <Typography variant="h4">Create yout Game Design Document</Typography>
      <Button
        color="secondary"
        variant="outlined"
        size="large"
      >
        Start
      </Button>
    </div>
  )
}