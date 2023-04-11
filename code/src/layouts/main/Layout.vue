<template>
  <v-app dark>
    <default-drawer v-if="smAndDown" v-model="drawer" />
    <default-bar @toggle-drawer="drawer = !drawer" />
    <default-view />
    <default-footer />
  </v-app>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useDisplay } from 'vuetify'
import DefaultBar from './AppBar.vue'
import DefaultView from './View.vue'
import DefaultDrawer from './Drawer.vue'
// footer
import DefaultFooter from './Footer.vue'

let drawer = ref(false)

// accesing vuetify useDisplay API

const { smAndDown } = useDisplay()
</script>
