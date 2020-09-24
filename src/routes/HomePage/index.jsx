import React from 'react'
import { Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'


export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <div className={styles.content}>
        <Typography variant="h2">GDD Generator</Typography>
        <Typography
          variant="h4"
          className={styles.subtitle}
        >
          Create your Game Design Document
        </Typography>
        <Button
          className={styles.nextButton}
          color="secondary"
          variant="contained"
          size="large"
          component={Link}
          to="/questions"
        >
          Start
        </Button>
      </div>

    </div>
  )
}