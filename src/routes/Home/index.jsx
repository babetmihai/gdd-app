import React from 'react'
import history from 'core/history'
import { Button } from 'react-bootstrap'
import styles from './index.module.scss'

export default function Home() {

  return (
    <div className={styles.home}>
      <h1>GDD Generator</h1>
      <h4>Create your Game Design Document</h4>
      <Button
        size="lg"
        variant="success"
        className={styles.button}
        onClick={() => history.push('/questions')}
      >
        Start
      </Button>
    </div>
  )
}