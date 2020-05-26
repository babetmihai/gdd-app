import { TYPES } from './actions'

export default [
  {
    id: 'platform',
    type: TYPES.MULTIPLE,
    options: ['console', 'pc', 'mobile']
  },
  { id: 'pc', options: ['client', 'browser'], requires: ['pc'] },
  { id: 'console', options: ['ps4', 'xbox', 'nintendo'], requires: ['console'] },
  { id: 'mobile', options: ['android', 'ios'], requires: ['mobile'] },
  { id: 'target_audience', type: TYPES.INPUT, nextId: 'monetization' },
  {
    id: 'monetization',
    options: ['f2p', 'b2p', 'subscription'],
    nextId: 'done'
  },
  { id: 'done', type: TYPES.DONE }
  // {
  //   id: 'game_type',
  //   options: [
  //     'action',
  //     'adventure',
  //     'rpg',
  //     'simulation',
  //     'strategy',
  //     'sports',
  //     'puzzle',
  //     'idle_game'
  //   ],
  //   nextId: 'game_type_details'
  // },
  // {
  //   id: 'game_type_details',
  //   parentId: 'game_type',
  //   options: [
  //     'platformer', 'shooter', 'fighting', 'beat_em_up', 'stealth', 'survival', 'rhythm',
  //     'visual_novel', 'point_and_click', '3d_adventure',
  //     'action_rpg', 'mmo_rpg', 'roguelike', 'sandbox_rpg',
  //     'tycoon', 'lifesyle', 'vehicle',
  //     'build_and_conquer', 'real_time_strategy', 'real_time_tactics', 'moba', 'tower_defense',
  //     'team_sports', 'competitive',
  //     'logic', 'trivia',
  //     'casual', 'party_game', 'board_game', 'educational'
  //   ],
  //   nextId: 'art_style'
  // },

  // { id: 'platformer', requires: ['action'] },
  // { id: 'fighting', requires: ['action'] },
  // { id: 'shooter', requires: ['action'] },
  // { id: 'beat_em_up', requires: ['action'] },
  // { id: 'stealth', requires: ['action'] },
  // { id: 'survival', requires: ['action'] },
  // { id: 'rhythm', requires: ['action'] },

  // { id: 'visual_novel', requires: ['adventure'] },
  // { id: 'point_and_click', requires: ['adventure'] },
  // { id: '3d_adventure', requires: ['adventure'] },

  // { id: 'action_rpg', requires: ['rpg'] },
  // { id: 'mmo_rpg', requires: ['rpg'] },
  // { id: 'roguelike', requires: ['rpg'] },
  // { id: 'sandbox_rpg', requires: ['rpg'] },

  // { id: 'tycoon', requires: ['simulation'] },
  // { id: 'lifesyle', requires: ['simulation'] },
  // { id: 'vehicle', requires: ['simulation'] },

  // { id: 'build_and_conquer', requires: ['strategy'] },
  // { id: 'real_time_strategy', requires: ['strategy'] },
  // { id: 'real_time_tactics', requires: ['strategy'] },
  // { id: 'moba', requires: ['strategy'] },
  // { id: 'tower_defense', requires: ['strategy'] },

  // { id: 'team_sports', requires: ['sports'] },
  // { id: 'competitive', requires: ['sports'] },

  // { id: 'logic', requires: ['strategy'] },
  // { id: 'trivia', requires: ['strategy'] },

  // { id: 'casual', requires: ['idle_game'] },
  // { id: 'party_game', requires: ['idle_game'] },
  // { id: 'board_game', requires: ['idle_game'] },
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

