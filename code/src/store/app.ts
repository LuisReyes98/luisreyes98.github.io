// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    //
    routes: [
      {
        title: 'Work',
        to: '/work',
      },
      {
        title: 'About',
        to: '/about',
      },
    ],
    appBarColorByRoute: {
      'Work': '#404360',
      'About': 'white',
    }
  }),
})
