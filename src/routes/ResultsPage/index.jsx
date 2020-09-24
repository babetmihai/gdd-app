import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import actions from 'store/actions'
import { Typography, Card, Button } from '@material-ui/core'
import RESULT_TEMPLATE from './template'
import { generateDocx } from './actions'
import ResultNode from './ResultNode'
import styles from './index.module.scss'

export default function ResultsPage() {
  const { results = {} } = useSelector(() => actions.get('gdd', {}))

  return (
    <Card className={styles.resultsPage}>
      <div className={styles.header}>
        <Typography
          variant="h4"
          className={styles.title}
        >
          Game Design Document
        </Typography>

      </div>
      <div className={styles.content}>
        {RESULT_TEMPLATE.map((node, index) => (
          <Fragment key={index}>
            <ResultNode
              node={node}
              results={results}
            />
            <br />
          </Fragment>
        ))}
      </div>
      <div className={styles.footer}>
        <Button
          size="large"
          className={styles.nextButton}
          color="secondary"
          variant="contained"
          onClick={() => generateDocx({ results })}
        >
          Download
        </Button>
      </div>

    </Card>
  )
}
