import React from 'react'
import join from 'classnames'
import { Card } from '@material-ui/core'
import styles from './index.module.scss'

export default function Layout({ children, className }) {

  return (
    <Card
      elevation={4}
      className={join(styles.page, className)}
    >
      {children}
    </Card>

  )
}