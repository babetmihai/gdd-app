export default [
  {
    id: 'platform',
    options: ['console', 'pc', 'mobile'],
    nextId: 'platform_detail'
  },
  {
    id: 'platform_detail',
    parentId: 'platform',
    options: ['ps4', 'xbox', 'nintendo', 'web_browser', 'client', 'ios', 'android'],
    nextId: 'game_type'
  },
  { id: 'ps4', requires: ['console'] },
  { id: 'nintendo', requires: ['console'] },
  { id: 'xbox', requires: ['console'] },
  { id: 'web_browser', requires: ['pc'] },
  { id: 'client', requires: ['pc'] },
  { id: 'ios', requires: ['mobile'] },
  { id: 'android', requires: ['mobile'] },

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
    ],
    nextId: 'game_type_detail'
  },

  {
    id: 'game_type_detail',
    parentId: 'game_type',
    options: [
      'platformer', 'shooter', 'fighting', 'beat_em_up', 'stealth', 'survival', 'rhythm',
      'visual_novel', 'point_and_click', '3d_adventure',
      'action_rpg', 'mmo_rpg', 'roguelike', 'sandbox_rpg',
      'tycoon', 'lifesyle', 'vehicle',
      'build_and_conquer', 'real_time_strategy', 'real_time_tactics', 'moba', 'tower_defense',
      'team_sports', 'competitive',
      'logic', 'trivia',
      'casual', 'party_game', 'board_game', 'educational'
    ],
    nextId: 'description'
  },

  { id: 'platformer', requires: ['action'] },
  { id: 'shooter', requires: ['action'] },
  { id: 'beat_em_up', requires: ['action'] },
  { id: 'stealth', requires: ['action'] },
  { id: 'survival', requires: ['action'] },
  { id: 'rhythm', requires: ['action'] },

  { id: 'visual_novel', requires: ['adventure'] },
  { id: 'point_and_click', requires: ['adventure'] },
  { id: '3d_adventure', requires: ['adventure'] },

  { id: 'action_rpg', requires: ['rpg'] },
  { id: 'mmo_rpg', requires: ['rpg'] },
  { id: 'roguelike', requires: ['rpg'] },
  { id: 'sandbox_rpg', requires: ['rpg'] },

  { id: '3rd_person', requires: ['shooter'] },
  { id: '1st_person', requires: ['shooter'] },
  { id: 'platformer', requires: ['action_adventure'] },
  { id: 'stealth', requires: ['action_adventure'] },
  {
    id: 'description',
    type: 'input',
    nextId: 'platform'
  },

  { id: 'art_style', options: ['2d', '3d'], nextId: 'art_style_detail' },

  { id: '2d', excludes: ['3rd_person'] },

  {
    id: 'art_style_detail',
    parentId: 'art_style',
    options: ['pixel_art', 'cartoonish', 'realistic', 'cell_shaded'],
    nextId: 'done'
  },

  { id: 'pixel_art', requires: ['2d'] },
  { id: 'cartoonish', requires: ['2d'] },
  { id: 'cell_shaded', requires: ['3d'] },

  { id: 'done', type: 'done' }
].reduce((acc, node) => {
  acc[node.id] = node
  return acc
}, {})

