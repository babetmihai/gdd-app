export default [
  { id: 'gameType', next: ['rpg', 'moba', 'shooter', 'action_adventure'] },

  { id: 'moba', next: ['platform'] },
  { id: 'rpg', next: ['mmo', 'medieval', 'fantasy'] },

  { id: 'mmo', next: ['platform'] },
  { id: 'medieval', next: ['platform'] },
  { id: 'fantasy', next: ['platform'] },

  { id: 'shooter', next: ['3rd_person', '1st_person'] },
  { id: '3rd_person', next: ['platform'] },
  { id: '1st_person', next: ['platform'] },

  { id: 'action_adventure', next: ['platformer', 'stealth'] },
  { id: 'platformer', next: ['platform'] },
  { id: 'stealth', next: ['platform'] },

  { id: 'platform', next: ['console', 'pc', 'mobile'], wait: true },

  { id: 'console', next: ['ps4', 'nintendo'], requires: ['moba'], excludes: ['rpg'] },
  { id: 'ps4', next: ['art_style'] },
  { id: 'nintendo', next: ['art_style'] },

  { id: 'pc', next: ['browser', 'client'], excludes: ['moba'] },
  { id: 'browser', next: ['art_style'] },
  { id: 'client', next: ['art_style'] },

  { id: 'mobile', next: ['ios', 'android'] },
  { id: 'ios', next: ['art_style'] },
  { id: 'android', next: ['art_style'] },

  { id: 'art_style', next: ['2d', '3d'] },

  { id: '2d', next: ['pixel_art', 'cartoonish', 'realistic'], excludes: ['3d_shooter'] },
  { id: 'pixel_art', next: ['mechanics'] },
  { id: 'cartoonish', next: ['mechanics'] },
  { id: 'realistic', next: ['mechanics'] },

  { id: '3d', next: ['cell_shaded', 'realistic'] },
  { id: 'cell_shaded', next: ['mechanics'] }
].reduce((acc, node) => {
  acc[node.id] = node
  return acc
}, {})

