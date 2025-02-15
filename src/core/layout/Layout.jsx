import { Typography } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'
import actions from 'store/actions'
import styles from './index.module.scss'

export default function Layout({ children }) {
  const isDone = useSelector(() => actions.get('gdd.results.done'))
  return (
    <main className={styles.layout}>
      <div className={styles.rightRectangle} />
      <div className={styles.centerTriangle} />
      <nav className={styles.header}>
        <div className={styles.left}>
          <NavLink
            className={styles.link}
            to="/"
          >
            <Typography variant="h4">GDD Generator</Typography>
          </NavLink>
        </div>

        <div className={styles.right}>
          <NavLink className={styles.link} to="/questions">
            <Typography variant="h6">Questions</Typography>
          </NavLink>
          {isDone &&
            <NavLink className={styles.link} to="/results">
              <Typography variant="h6">Results</Typography>
            </NavLink>
          }
        </div>

      </nav>
      <div className={styles.content}>
        {children}
      </div>
    </main>

  )
}