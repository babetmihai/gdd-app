import React from 'react'

import { connect } from 'react-redux'
import actions from 'store/actions'
import data from './data'
import { t } from 'core/intl'
import { selectGdd } from 'core/gdd'
import styles from './index.module.scss'

function Result(props) {
  const { chapters = [], results = {} } = props
  React.useEffect(() => {
    actions.update('gdd.chapters', data)
  }, [])

  return (
    <div className={styles.result}>
      {chapters.map((chapter) => {
        const { id, sections = {} } = chapter
        return (
          <div key={id}>
            <h4>{t(id)}</h4>
            {Object.keys(sections)
              .filter((sectionId) => results[sectionId])
              .map((sectionId) => (
                <p key={sectionId}>
                  {t(`sections_${sectionId}`, results, sections[sectionId])}
                </p>
              ))
            }
          </div>
        )
      })}
    </div>
  )
}

export default connect(() => selectGdd())(Result)
