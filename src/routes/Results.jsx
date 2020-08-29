import React from 'react'
import { useSelector } from 'react-redux'
import { t } from 'core/intl'
import actions from 'store/actions'
import { Card } from '@material-ui/core'


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
        <h1>{t('game_design_document')}</h1>
        <section>
          <h2>{t('place_in_game_culture')}</h2>
          {results.pc &&
            <>
              <p>{t('pc_story')}</p>
              {results.client && <p>{t('pc_client_story')}</p>}
              {results.browser && <p>{t('pc_browser_story')}</p>}
            </>
          }
          {results.console &&
            <>
              <p>{t('console_story')}</p>
              {results.ps && <p>{t('console_ps_story')}</p>}
              {results.xbox && <p>{t('console_xbox_story')}</p>}
              {results.nintendo && <p>{t('console_nintendo_story')}</p>}
            </>
          }
          <p>{t('culture_input_description')}</p>
        </section>
        <section>
          <h2>{t('game_type')}</h2>
          <p>{t('game_type_input_description')}</p>
        </section>
        <section>
          <h2>{t('target_audience')}</h2>
          <p>{t('target_audience_input_description')}</p>
        </section>
        <section>
          <h2>{t('monetization')}</h2>
          {results.free2play && <p>{t('free2play_story')}</p>}
          {results.buy2play && <p>{t('buy2play_story')}</p>}
          {results.subscription && <p>{t('subscription_story')}</p>}
          <p>{t('monetization_input_description')}</p>
        </section>
        <section>
          <h2>{t('tech')}</h2>
          {results.pc && <p>{t('pc_tech_story')}</p>}
          {results.console && <p>{t('console_tech_story')}</p>}
          <p>{t('tech_story')}</p>
        </section>
        <section>
          <h2>{t('multiplayer_specifics')}</h2>
          {results.singleplayer && <p>{t('singleplayer_story')}</p>}
          {results.multiplayer && <p>{t('multiplayer_story')}</p>}
          <p>{t('multiplayer_input_description')}</p>
        </section>
        <section>
          <h2>{t('style')}</h2>
          <h3>{t('style_specifics')}</h3>
          <p>{t('style_specifics_input_description')}</p>
          <h3>{t('interface')}</h3>
          {results.pc && <p>{t('pc_interface_story')}</p>}
          {results.console && <p>{t('console_interface_story')}</p>}
          <p>{t('interface_input_description')}</p>
          <h3>{t('controls_mapping')}</h3>
          <p>{t('controls_mapping_input_description')}</p>
        </section>
        <section>
          <h2>{t('core_mechanics')}</h2>
          <p>{t('core_mechanics_story')}</p>
        </section>
        <section>
          <h2>{t('story_and_content')}</h2>
          <h3>{t('backstory')}</h3>
          <p>{t('backstory_input_description')}</p>
          <h3>{t('characters')}</h3>
          <p>{t('characters_input_description')}</p>
        </section>
        <section>
          <h2>{t('rythm')}</h2>
          <p>{t('rythm_input_description')}</p>
        </section>
        <section>
          <h2>{t('resonance')}</h2>
          <p>{t('resonance_input_description')}</p>
        </section>
        <section>
          <h2>{t('core_loop')}</h2>
          <p>{t('core_loop_input_description')}</p>
        </section>
        <section>
          <h2>{t('rewards')}</h2>
          <p>{t('rewards_input_description')}</p>
        </section>
        <section>
          <h2>{t('punishment')}</h2>
          <p>{t('punishment_input_description')}</p>
        </section>
        <section>
          <h2>{t('social')}</h2>
          <p>{t('social_input_description')}</p>
        </section>
        <section>
          <h2>{t('future_planning')}</h2>
          <p>{t('future_planning_input_description')}</p>
        </section>
      </div>
    </Card>
  )
}