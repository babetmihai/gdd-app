import React from 'react'
import styles from './index.module.scss'
import { Card, Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Page(props) {
  const { children } = props

  return (
    <div className={styles.page}>
      <Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
        <Navbar.Brand as={Link} to="/">
          GDD Generator
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link as={Link} to="/questions">Create</Nav.Link>
            <Nav.Link as={Link} to="/help">Help</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar >
      <div className={styles.content}>
        <Card className={styles.children}>
          {children}
        </Card >
      </div>
    </div>
  )
}