// Utilities
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    //
    routes: [
      {
        title: 'About',
        to: '/about',
        icon: 'mdi-account'
      },
    ],
  }),
})
