export default [
  { id: 'gameType', options: ['rpg', 'moba', 'shooter', 'action_adventure'] },

  { id: 'moba', nextId: 'platform' },
  { id: 'rpg', options: ['mmo', 'medieval', 'fantasy'] },

  { id: 'mmo', nextId: 'platform' },
  { id: 'medieval', nextId: 'platform' },
  { id: 'fantasy', nextId: 'platform' },

  { id: 'shooter', options: ['3rd_person', '1st_person'] },
  { id: '3rd_person', nextId: 'platform' },
  { id: '1st_person', nextId: 'platform' },

  { id: 'action_adventure', options: ['platformer', 'stealth'] },
  { id: 'platformer', nextId: 'platform' },
  { id: 'stealth', nextId: 'platform' },

  { id: 'platform', options: ['console', 'pc', 'mobile'] },

  { id: 'console', options: ['ps4', 'nintendo'], requires: ['moba'], excludes: ['rpg'] },
  { id: 'ps4', nextId: 'art_style' },
  { id: 'nintendo', nextId: 'art_style' },

  { id: 'pc', options: ['browser', 'client'], excludes: ['moba'] },
  { id: 'browser', nextId: 'art_style' },
  { id: 'client', nextId: 'art_style' },

  { id: 'mobile', options: ['ios', 'android'] },
  { id: 'ios', nextId: 'art_style' },
  { id: 'android', nextId: 'art_style' },

  { id: 'art_style', options: ['2d', '3d'] },

  { id: '2d', options: ['pixel_art', 'cartoonish', 'realistic'], excludes: ['3d_shooter'] },
  { id: 'pixel_art', nextId: 'mechanics' },
  { id: 'cartoonish', nextId: 'mechanics' },
  { id: 'realistic', nextId: 'mechanics' },

  { id: '3d', options: ['cell_shaded', 'realistic'] },
  { id: 'cell_shaded', nextId: ['mechanics'] }
].reduce((acc, node) => {
  acc[node.id] = node
  return acc
}, {})

