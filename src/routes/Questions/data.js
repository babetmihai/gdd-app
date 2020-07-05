import { TYPES } from 'core/gdd'

export default [
  {
    id: 'platform',
    type: TYPES.MULTIPLE,
    options: ['pc', 'console', 'mobile']
  },
  { id: 'pc', options: ['client', 'browser'], requires: ['pc'] },
  { id: 'console', options: ['ps4', 'xbox', 'nintendo'], requires: ['console'] },
  { id: 'mobile', options: ['android', 'ios'], requires: ['mobile'] },
  { id: 'target_audience', type: TYPES.INPUT },
  { id: 'monetization', options: ['f2p', 'b2p', 'subscription'] },
  {
    id: 'game_type',
    options: [
      'action',
      'adventure',
      'rpg',
      'simulation',
      'strategy',
      'sports',
      'puzzle',
      'idle_game'
    ]
  },
  { id: 'action', options: ['platformer', 'shooter', 'fighting', 'beat_em_up', 'stealth', 'survival', 'rhythm'], requires: ['action'] },
  { id: 'adventure', options: ['visual_novel', 'point_and_click', '3d_adventure'], requires: ['adventure'] },
  { id: 'rpg', options: ['action_rpg', 'mmo_rpg', 'roguelike', 'sandbox_rpg'], requires: ['rpg'] },
  { id: 'simulation', options: ['tycoon', 'lifesyle', 'vehicle'], requires: ['simulation'] },
  { id: 'strategy', options: [ 'build_and_conquer', 'real_time_strategy', 'real_time_tactics', 'moba', 'tower_defense'], requires: ['strategy'] },
  { id: 'sports', options: ['team_sports', 'competitive'], requires: ['sports'] },
  { id: 'puzzle', options: ['logic', 'trivia'], requires: ['puzzle'] },
  { id: 'idle_game', options: ['casual', 'party_game', 'board_game', 'educational'], requires: ['puzzle'] },

  { id: 'art_style', options: ['2d', '3d'] },

  { id: '2d', options: ['pixel', 'vector', 'cutout', 'doodle'], requires: ['2d'] },
  { id: '3d', options: ['realistic', 'cell_shaded', 'low_poly', 'sci_fi_realistic'], requires: ['3d'] },

  { id: 'enviroment_design', options: ['custom_designed', 'procedural_generated'] },

  { id: 'core_mechanics', options: ['dynamic', 'achievemets'] },
  {
    id: 'dynamic',
    options: [
      'racing',
      'running',
      'jumping',
      'dodging',
      'flying',
      'attacking',
      'syncronizing'
    ],
    requires: ['dynamic']
  },
  {
    id: 'achievemets',
    options: [
      'collecting',
      'crafting',
      'questing',
      'matching',
      'exploring',
      'developing'
    ],
    requires: ['achievemets']
  },
  { id: 'future_content', options: ['expansion', 'sequel', 'new_game'] },
  {
    id: 'expansion',
    options: [
      'new_quests',
      'new_maps',
      'new_items',
      'new_features',
      'new_activities'
    ],
    requires: ['expansion']
  },
  {
    id: 'sequel',
    options: [
      'new_features_based_on_feedback',
      'new_content_similar_to_the_previous_title'
    ],
    requires: ['sequel']
  },
  { id: 'done', type: TYPES.DONE }
].reduce((acc, node) => {
  acc[node.id] = node
  return acc
}, {})

