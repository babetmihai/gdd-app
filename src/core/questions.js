export default {
  platform: {
    id: 'platform',
    children: {
      pc: {
        id: 'pc',
        options: {
          client: { id: 'client' },
          web_browser: { id: 'web_browser' }
        }
      },
      console: {
        id: 'console',
        children: {
          ps: { id: 'ps' },
          xbox: { id: ' xbox' },
          nintendo: { id: 'nintendo' }
        }
      },
      mobile: {
        id: 'mobile'
      }
    }
  },
  gameplay: {
    id: 'gameplay',
    children: {
      singleplayer: { id: 'singleplayer' },
      multiplayer: { id: 'multiplayer' }
    }
  },
  monetization: {
    id: 'monetization',
    children: {
      buy2play: { id: 'buy2play' },
      free2play: { id: 'free2play' },
      subscription: { id: 'subscription' }
    }
  }
}