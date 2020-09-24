import React from 'react'
import { Typography, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import styles from './index.module.scss'


export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <div>
        <Typography variant="h2">GDD Generator</Typography>
        <Typography variant="h4">Create yout Game Design Document</Typography>
        <Button
          color="secondary"
          variant="outlined"
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