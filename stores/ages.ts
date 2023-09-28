import { defineStore } from 'pinia'

export const useAgesStore = (defineStore('ages',{
  state: () => ({
    activeAge: '',
  }),
  actions: {
    setAge(period: string) {
      this.activeAge = period;
      document.cookie = `age=${this.activeAge}`
    },
    loadAge() {
      const cookies = document.cookie.split(';');
      for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if(name === 'age') {
          this.activeAge = value;
          break;
        } else {
          this.activeAge = '';
        }
      }
    }
  },
}));
