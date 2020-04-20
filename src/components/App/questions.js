export default [
  { id: 'gameType', options: ['rpg', 'moba', 'shooter', 'action_adventure'], nextId: 'gameSubtype' },

  { id: 'moba' },
  { id: 'rpg' },
  { id: 'shooter' },
  { id: 'action_adventure' },

  { id: 'gameSubtype', options: ['mmo', 'medieval', 'fantasy', '3rd_person', '1st_person'], nextId: 'platform' },

  { id: 'mmo', requires: ['rpg'] },
  { id: 'medieval', requires: ['rpg'] },
  { id: 'fantasy', requires: ['rpg'] },
  { id: '3rd_person', requires: ['shooter'] },
  { id: '1st_person', requires: ['shooter'] },
  { id: 'platformer', requires: ['action_adventure'] },
  { id: 'stealth', requires: ['action_adventure'] },

  { id: 'platform', options: ['console', 'pc', 'mobile'], nextId: 'platform_detail' },

  { id: 'console' },
  { id: 'pc' },
  { id: 'mobile' },

  { id: 'platform_detail', options: ['ps4', 'nintendo', 'browser', 'client', 'ios', 'android'], nextId: 'art_style' },

  { id: 'ps4', requires: ['console'] },
  { id: 'nintendo', requires: ['console'] },
  { id: 'browser', requires: ['pc'] },
  { id: 'client', requires: ['pc'] },
  { id: 'ios', requires: ['mobile'] },
  { id: 'android', requires: ['mobile'] },

  { id: 'art_style', options: ['2d', '3d'], nextId: 'art_style_detail' },

  { id: '2d', excludes: ['3d_shooter'] },
  { id: '3d' },

  { id: 'art_style_detail', options: ['pixel_art', 'cartoonish', 'realistic', 'cell_shaded', 'realistic'], nextId: 'done' },

  { id: 'pixel_art', requires: ['2d'] },
  { id: 'cartoonish', requires: ['2d'] },
  { id: 'realistic' },
  { id: 'cell_shaded', requires: ['3d'] },

  { id: 'done' }

].reduce((acc, node) => {
  acc[node.id] = node
  return acc
}, {})

