<template>
  <v-app dark>
    <default-drawer
      v-model="drawer"
    />
    <default-bar
      @toggle-drawer="drawer = !drawer"
    />
    {{drawer}}
    <default-view />
  </v-app>
</template>

<script lang="ts" setup>
  import { ref } from 'vue'
  import DefaultBar from './AppBar.vue'
  import DefaultView from './View.vue'
  import DefaultDrawer from './Drawer.vue'

  let drawer = ref(false)
</script>
