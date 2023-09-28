import { defineStore } from 'pinia'

export const useGendersStore = (defineStore('genders',{
  state: () => ({
    gender: '',
  }),
  actions: {
    setMan() {
      this.gender = 'male';
      document.cookie = `gender=${this.gender}`
    },
    setWoman() {
      this.gender = 'female'
      document.cookie = `gender=${this.gender}`
    },
    loadGender() {
      const cookies = document.cookie.split(';');
      for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if(name === 'gender') {
          this.gender = value;
          break;
        } else {
          this.gender = '';
        }
      }
    }
  },
}))
