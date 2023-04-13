<template>
  <v-app-bar flat class="main-top_bar" :color="appBarColor">
    <v-btn v-if="smAndDown" icon @click="$emit('toggle-drawer')">
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-app-bar-title> Luis Rogelio Reyes Hernandez </v-app-bar-title>
    <template v-if="!smAndDown">
      <!-- V for -->
      <v-btn v-for="item in appStore.routes" :key="item.title" class="mx-2" rounded="pill" variant="tonal" :to="item.to"
        :active="useRoute().name === item.title">
        {{ item.title }}
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import { useRoute } from "vue-router";
import { useAppStore } from '@/store/app'
import { computed } from "vue"


const { smAndDown } = useDisplay()

const appStore = useAppStore()


// computed
const appBarColor = computed(() => {
  // index
  var index = useRoute().name?.toString() || '';
  return appStore.appBarColorByRoute[index];
})
</script>

<style lang="scss" scoped>
.main-top_bar {
  transition: background-color 0.2s ease-in-out;

}
</style>