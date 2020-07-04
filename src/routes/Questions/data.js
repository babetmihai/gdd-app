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
  { id: 'done', type: TYPES.DONE }

  // { id: 'educational', requires: ['idle_game'] },

  // { id: 'art_style', options: ['2d', '3d'], nextId: 'art_style_detail' },
  // {
  //   id: 'art_style_detail',
  //   parentId: 'art_style',
  //   nextId: 'core_mechanics',
  //   options: ['pixel', 'vector', 'cutout', 'doodle', 'realistic', 'cell_shaded', 'low_poly', 'sci_fi_realistic']
  // },

  // { id: 'pixel', requires: ['2d'] },
  // { id: 'vector', requires: ['2d'] },
  // { id: 'cutout', requires: ['2d'] },
  // { id: 'doodle', requires: ['2d'] },
  // { id: 'realistic', requires: ['3d'] },
  // { id: 'cell_shaded', requires: ['3d'] },
  // { id: 'low_poly', requires: ['3d'] },
  // { id: 'sci_fi_realistic', requires: ['3d'] },

  // { id: 'core_mechanics', options: ['dynamic', 'achievemets'], nextId: 'core_mechanics_detail' },
  // {
  //   id: 'core_mechanics_detail',
  //   parentId: 'core_mechanics',
  //   nextId: 'future_content',
  //   options: [
  //     'racing',
  //     'running',
  //     'jumping',
  //     'dodging',
  //     'flying',
  //     'attacking',
  //     'syncronizing',
  //     'collecting',
  //     'crafting',
  //     'questing',
  //     'matching',
  //     'exploring',
  //     'developing'
  //   ]
  // },
  // { id: 'racing', requires: ['dynamic'] },
  // { id: 'running', requires: ['dynamic'] },
  // { id: 'jumping', requires: ['dynamic'] },
  // { id: 'dodging', requires: ['dynamic'] },
  // { id: 'flying', requires: ['dynamic'] },
  // { id: 'attacking', requires: ['dynamic'] },
  // { id: 'syncronizing', requires: ['dynamic'] },
  // { id: 'collecting', requires: ['achievemets'] },
  // { id: 'crafting', requires: ['achievemets'] },
  // { id: 'questing', requires: ['achievemets'] },
  // { id: 'matching', requires: ['achievemets'] },
  // { id: 'exploring', requires: ['achievemets'] },
  // { id: 'developing', requires: ['achievemets'] },

  // { id: 'future_content', options: ['expansion', 'sequel', 'new_game'], nextId: 'future_content_detail' },
  // {
  //   id: 'future_content_detail',
  //   parentId: 'future_content',
  //   nextId: 'done',
  //   options: [
  //     'new_quests',
  //     'new_maps',
  //     'new_items',
  //     'new_features',
  //     'new_content'
  //   ]
  // },

  // { id: 'new_quests', requires: ['expansion'] },
  // { id: 'new_maps', requires: ['expansion'] },
  // { id: 'new_items', requires: ['expansion'] },
  // { id: 'new_features', excludes: ['new_game'] },
  // { id: 'new_content', excludes: ['expansion'] },

].reduce((acc, node) => {
  acc[node.id] = node
  return acc
}, {})

