import React from 'react'
import _ from 'lodash'
import Divider from '@material-ui/core/Divider'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import MailIcon from '@material-ui/icons/Mail'

import { useSelector } from 'react-redux'
import QUESTIONS from '../questions'
import actions from 'store/actions'

import styles from './index.module.scss'

export default function Sidebar() {
  const questionIds = Object.keys(QUESTIONS)
  const { results } = useSelector(() => actions.get('gdd', {}))
  const filteredIds = questionIds.filter((id) => {
    const { requires } = _.get(QUESTIONS, id, {})
    return !requires || _.get(results, requires)
  })
  return (
    <div>
      <div className={styles.toolbar} />
      <Divider />
      <List>
        {filteredIds.map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>

  )
}