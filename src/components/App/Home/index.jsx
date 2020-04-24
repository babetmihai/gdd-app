import React from 'react'
import history from 'core/history'
import Page from 'components/Page'
import { Button } from 'react-bootstrap'
import styles from './index.module.scss'

export default function Home() {

  return (
    <Page>
      <div className={styles.home}>
        <h1>gdoc gerenrator</h1>

        <Button
          size="lg"
          variant="success"
          onClick={() => history.push('/questions')}
        >
          Start
        </Button>
      </div>

    </Page>
  )
}