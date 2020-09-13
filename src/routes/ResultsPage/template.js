export default [
  { id: 'game_design_document', tagName: 'h1' },
  {
    tagName: 'section',
    children: [
      { id: 'pc_story', requires: 'pc', tagName: 'p' },
      { id: 'pc_client_story', requires: 'client', tagName: 'p' },
      { id: 'pc_browser_story', requires: 'browser', tagName: 'p' },
      { id: 'console', requires: 'console', tagName: 'h2' },
      { id: 'console_story', requires: 'console', tagName: 'p' },
      { id: 'console_ps_story', requires: 'ps', tagName: 'p' },
      { id: 'xbox', requires: 'xbox', tagName: 'h3' },
      { id: 'console_xbox_story', requires: 'xbox', tagName: 'p' },
      { id: 'console_nintendo_story', requires: 'nintendo', tagName: 'p' },
      { id: 'culture_input_description', tagName: 'p' }
    ]
  },
  {
    tagName: 'section',
    children: [
      { id: 'game_type', tagName: 'h2' },
      { id: 'game_type_input_description', tagName: 'p' }
    ]
  },
  {
    tagName: 'section',
    children: [
      { id: 'target_audience', tagName: 'h2' },
      { id: 'target_audience_input_description', tagName: 'p' }
    ]
  },
  {
    tagName: 'section',
    children: [
      { id: 'monetization', tagName: 'h2' },
      { id: 'free2play_story', requires: 'free2play', tagName: 'p' },
      { id: 'buy2play_story', requires: 'buy2play', tagName: 'p' },
      { id: 'subscription_story', requires: 'subscription', tagName: 'p' },
      { id: 'monetization_input_description', tagName: 'p' }
    ]
  },
  {
    tagName: 'section',
    children: [
      { id: 'tech', tagName: 'h2' },
      { id: 'pc_tech_story', requires: 'pc', tagName: 'p' },
      { id: 'console_tech_story', requires: 'console', tagName: 'p' },
      { id: 'tech_story', tagName: 'p' }
    ]
  },
  {
    tagName: 'section',
    children: [
      { id: 'multiplayer_specifics', tagName: 'h2' },
      { id: 'singleplayer_story', requires: 'singleplayer', tagName: 'p' },
      { id: 'multiplayer_story', requires: 'multiplayer', tagName: 'p' },
      { id: 'multiplayer_input_description', tagName: 'p' }
    ]
  },
  {
    tagName: 'section',
    children: [
      { id: 'style', tagName: 'h2' },
      { id: 'style_specifics_input_description', tagName: 'p' },
      { id: 'pc_interface_story', requires: 'pc', tagName: 'p' },
      { id: 'console_interface_story', requires: 'console', tagName: 'p' },
      { id: 'interface_input_description', tagName: 'p' },
      { id: 'controls_mapping_input_description', tagName: 'p' }
    ]
  },
  {
    tagName: 'section',
    children: [
      { id: 'story_and_content', tagName: 'h2' },
      { id: 'backstory_input_description', tagName: 'p' },
      { id: 'characters_input_description', tagName: 'p' }
    ]
  },
  {
    tagName: 'section',
    children: [
      { id: 'rythm', tagName: 'h2' },
      { id: 'rythm_input_description', tagName: 'p' }
    ]
  },
  {
    tagName: 'section',
    children: [
      { id: 'resonance', tagName: 'h2' },
      { id: 'resonance_input_description', tagName: 'p' }
    ]
  },
  {
    tagName: 'section',
    children: [
      { id: 'core_loop', tagName: 'h2' },
      { id: 'core_loop_input_description', tagName: 'p' }
    ]
  },
  {
    tagName: 'section',
    children: [
      { id: 'rewards', tagName: 'h2' },
      { id: 'rewards_input_description', tagName: 'p' }
    ]
  },
  {
    tagName: 'section',
    children: [
      { id: 'punishment', tagName: 'h2' },
      { id: 'punishment_input_description', tagName: 'p' }
    ]
  },
  {
    tagName: 'section',
    children: [
      { id: 'social', tagName: 'h2' },
      { id: 'social_input_description', tagName: 'p' }
    ]
  },
  {
    tagName: 'section',
    children: [
      { id: 'future_planning', tagName: 'h2' },
      { id: 'future_planning_input_description', tagName: 'p' }
    ]
  }
]