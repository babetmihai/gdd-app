import React from 'react'
import styles from './index.module.scss'
import { Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Page(props) {
  const { children } = props

  return (
    <div className={styles.page}>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          GDD Generator
        </Navbar.Brand>
      </Navbar >
      <div className={styles.content}>
        <div className={styles.children}>
          {children}
        </div >
      </div>
    </div>
  )
}