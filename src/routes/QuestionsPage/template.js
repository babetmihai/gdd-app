export default {
  platform: {
    id: 'platform',
    options: ['pc', 'console', 'mobile']
  },
  pc: {
    id: 'pc',
    requires: 'pc',
    options: ['client', 'web_browser']
  },
  console: {
    id: 'console',
    requires: 'console',
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
