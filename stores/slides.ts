import { defineStore } from 'pinia'

export const useSlidesStore = (defineStore('slides',{
  state: () => ({
    activeSlide: 0,
    slidesList: [
      {
        id: 1,
        title: "Slide 1"
      },
      {
        id: 2,
        title: "Slide 2"
      },
      {
        id: 3,
        title: "Slide 3"
      },
      {
        id: 4,
        title: "Slide 4"
      },
      {
        id: 5,
        title: "Slide 5"
      },
      {
        id: 6,
        title: "Slide 6"
      },
      {
        id: 7,
        title: "Slide 7"
      },
      {
        id: 8,
        title: "Slide 8"
      },
      {
        id: 9,
        title: "Slide 9"
      },
      {
        id: 10,
        title: "Slide 10"
      },
    ]
  }),
  actions: {
    setSlide(index: number) {
      this.activeSlide = index;
      document.cookie = `slide=${this.activeSlide}`
    },
    increment() {
      this.activeSlide++;
      document.cookie = `slide=${this.activeSlide}`
    },
    decrement() {
      if(this.activeSlide > 0) {
        this.activeSlide--;
        document.cookie = `slide=${this.activeSlide}`
      }
    },
    loadSlide() {
      const cookies = document.cookie.split(';');
      for (const cookie of cookies) {
        const [name, value] = cookie.trim().split('=');
        if(name === 'slide') {
          this.activeSlide = Number(value);
          document.cookie = `slide=${this.activeSlide}`
          break;
        }
      }
    }
  },
}))
