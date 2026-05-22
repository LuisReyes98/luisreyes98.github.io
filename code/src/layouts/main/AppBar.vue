<template>
  <v-app-bar flat class="main-top_bar" :color="appBarColor">
    <v-btn v-if="smAndDown" icon @click="$emit('toggle-drawer')">
      <v-icon
        :style="`color: ${calculateTextColor(appBarColor)}`"
      >
        mdi-menu
      </v-icon>
    </v-btn>
    <v-app-bar-title
      :style="`color: ${calculateTextColor(appBarColor)}`"
    >
      Luis Rogelio Reyes Hernandez
    </v-app-bar-title>
    <template v-if="!smAndDown">
      <!-- V for -->
      <v-btn v-for="item in appStore.routes" :key="item.title"
        class="mx-2"
        rounded="pill"
        variant="tonal"
        :to="item.to"
        :active="route.name === item.title"
        :style="`color: ${calculateTextColor(appBarColor)}`"
      >
        {{ item.title }}
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import { useRoute, useRouter } from "vue-router";
import { useAppStore } from '@/store/app'
import { computed } from "vue"
import { calculateTextColor } from '@/utils/colors'

const { smAndDown } = useDisplay()
const route = useRoute()
const router = useRouter()
const appStore = useAppStore()


// computed
const appBarColor = computed(() => {
  // index
  var index = route.name?.toString() || '';
  return appStore.appBarColorByRoute[index];
})

// method to travel to a different route
function navigateTo(route: string) {
  // navigate to route
  router.push(route)
}

</script>

<style lang="scss" scoped>
.main-top_bar {
  transition: background-color 0.2s ease-in-out;

}
</style>