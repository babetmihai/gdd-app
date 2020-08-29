import React, { Fragment } from 'react'
import { useSelector } from 'react-redux'
import { t } from 'core/intl'
import actions from 'store/actions'
import { Card, Typography } from '@material-ui/core'


export default function Results() {
  const { results = {} } = useSelector(() => actions.get('gdd', {}))

  return (
    <Card
      style={{
        padding: 13,
        height: '90vh',
        maxWidth: 835,
        display: 'flex',
        flexDirection: 'column',
        overflow: 'auto'
      }}
    >
      <div
        style={{
          margin: 2,
          fontFamily: 'inherit',
          display: 'flex',
          flexDirection: 'column',
          flex: 'none'
        }}
      >
        <h1>{t('place_in_game_culture')}</h1>
        {results.pc &&
          <>
            <p>{t('pc_story')}</p>
            <br />
            {results.client && <p>{t('pc_client_story')}</p>}
            {results.browser && <p>{t('pc_browser_story')}</p>}
          </>
        }
        {results.console &&
          <>
            <p>{t('console_story')}</p>
            <br />
            {results.ps && <p>{t('console_ps_story')}</p>}
            {results.xbox && <p>{t('console_xbox_story')}</p>}
            {results.nintendo && <p>{t('console_nintendo_story')}</p>}
          </>
        }
        <p>
          {t('specify_culture')}
        </p>
      </div>
    </Card>
  )
}