import React from 'react'

import { connect } from 'react-redux'
import actions from 'store/actions'
import data from './data'
import { t } from 'core/intl'
import { selectGdd, flattenAnswers } from 'core/gdd'

function Result(props) {
  const { results = [], answers = {} } = props
  React.useEffect(() => {
    actions.update('gdd.results', data)
  }, [])
  const answerObject = flattenAnswers(answers)
  console.log(answerObject)
  return (
    <div>
      {results.map((chapter) => {
        const { id, sections = {} } = chapter
        return (
          <div key={id}>
            <h4>{t(id)}</h4>
            {Object.keys(sections)
              .filter((sectionId) => answerObject[sectionId])
              .map((sectionId) => (
                <p key={sectionId}>
                  {t(`sections_${sectionId}`, answerObject, sections[sectionId])}
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
