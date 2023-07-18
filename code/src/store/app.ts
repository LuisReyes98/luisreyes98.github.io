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
        title: 'My Projects',
        to: '/projects',
      },
      {
        title: 'About Me',
        to: '/about',
      },
    ],
    appBarColorByRoute: {
      'Projects': '#404360',
      'About': '#FFFFFF',
    },
  }),
})
