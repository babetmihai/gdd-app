import { Typography } from '@material-ui/core'
import React from 'react'
import { NavLink } from 'react-router-dom'
import styles from './index.module.scss'

export default function Layout({ children }) {

  return (
    <main className={styles.layout}>
      <nav className={styles.header}>
        <NavLink className={styles.link} to="/">
          <Typography variant="h4">GDD Generator</Typography>
        </NavLink>
        <NavLink className={styles.link} to="/questions">
          <Typography variant="h5">Questions</Typography>
        </NavLink>
        <NavLink className={styles.link} to="/results">
          <Typography variant="h5">Results</Typography>
        </NavLink>
      </nav>
      <div className={styles.content}>
        {children}
      </div>

    </main>

  )
}