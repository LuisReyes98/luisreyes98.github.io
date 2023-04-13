// Utilities
import { defineStore } from 'pinia'

interface MyAppStore {
  routes: { title: string; to: string }[]
  appBarColorByRoute: { [key: string]: string }
}

export const useAppStore = defineStore('app', {
  state: (): MyAppStore => ({
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
    },
  }),
})
