import React from 'react'
import _ from 'lodash'
import { connect } from 'react-redux'
import actions from 'store/actions'
import data from './data'
import { t } from 'core/intl'
import { selectGdd } from 'routes/Questions/actions'

function Result(props) {
  const { results = [], answers = {} } = props
  React.useEffect(() => {
    actions.update('gdd.results', data)
  }, [])
  const answerObject = spreadAnswers(answers)

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

const spreadAnswers = (answers) => Object.keys(answers)
  .reduce((acc, answerId) => {
    const answer = answers[answerId]
    if (_.isPlainObject(answer)) {
      const value = getValue(Object.keys(answer))
      if (value) {
        return { ...acc, [answerId]: value, ...answer }
      } else {
        return acc
      }
    } else {
      return { ...acc, [answerId]: answer }
    }
  }, {})

const getValue = (list) => {
  if (list.length > 1) return list
  if (list.length === 1) return _.first(list)
  return undefined
}

export default connect(() => selectGdd())(Result)
