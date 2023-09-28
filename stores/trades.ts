import { defineStore } from 'pinia'

export const useTradesStore = (defineStore('trades',{
  state: () => ({
    tradeType: '',
  }),
  actions: {
    setSignal() {
      this.tradeType = 'signal';
      document.cookie = `tradeType=${this.tradeType}`
    },
    setRobot() {
      this.tradeType = 'robot'
      document.cookie = `tradeType=${this.tradeType}`
    },
    setStrategy() {
      this.tradeType = 'strategy'
      document.cookie = `tradeType=${this.tradeType}`
    },
    loadTradeType() {
      const cookies = document.cookie.split(';');
      for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if(name === 'tradeType') {
          this.tradeType = value;
          break;
        } else {
          this.tradeType = '';
        }
      }
    }
  },
}))
