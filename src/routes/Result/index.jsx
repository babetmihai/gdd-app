import React from 'react'
import { useSelector } from 'react-redux'
import actions from 'store/actions'
import data from './data'
import { t } from 'core/intl'
import { selectGdd } from 'core/gdd'
import styles from './index.module.scss'

export default function Result() {
  React.useEffect(() => {
    actions.update('gdd.chapters', data)
  }, [])

  const gddModule = useSelector(() => selectGdd())
  const { chapters = [], result = {} } = gddModule

  return (
    <div className={styles.result}>
      {chapters.map((chapter) => {
        const { id, sections = {} } = chapter
        return (
          <div key={id}>
            <h4>{t(id)}</h4>
            {Object.keys(sections)
              .filter((sectionId) => result[sectionId])
              .map((sectionId) => (
                <p key={sectionId}>
                  {t(`sections_${sectionId}`, result, sections[sectionId])}
                </p>
              ))
            }
          </div>
        )
      })}
    </div>
  )
}
