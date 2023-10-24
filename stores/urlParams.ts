import { defineStore } from 'pinia'
export const useUrlParamsStore = (defineStore('params',{
  state: () => ({
    affParam: '',
    affTrackParam: ''
  }),
  actions: {
    setAff(param:string) {
      this.affParam = param;
    },
    setAffTrack(param:string) {
      this.affTrackParam = param;
    }
  },
}))
