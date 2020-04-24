import React from 'react'
import join from 'classnames'
import styles from './index.module.scss'

export default function Page(props) {

  const { children, className } = props

  return (
    <div className={join(styles.page, className)}>
      {children}
    </div>
  )
}