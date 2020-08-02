export default {
  platform: {
    id: 'platform',
    options: ['pc', 'console', 'mobile']
  },
  pc: {
    id: 'pc',
    parentId: 'platform',
    options: ['client', 'web_browser']
  },
  console: {
    id: 'console',
    parentId: 'platform',
    options: ['ps', 'xbox', 'nintendo']
  },
  gameplay: {
    id: 'gameplay',
    options: ['singleplayer', 'multiplayer']
  },
  monetization: {
    id: 'monetization',
    options: ['buy2play', 'free2play', 'subscription']
  }
}