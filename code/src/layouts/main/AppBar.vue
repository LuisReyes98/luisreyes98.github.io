<template>
  <v-app-bar flat>
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

    <!-- <v-btn
      class="mx-2"
      variant="text"
      rounded="pill"
      to="/"
      :active="useRoute().name === 'Home'"
    >
      Me
    </v-btn>

    <v-btn
      class="mx-2"
      rounded="pill"
      variant="text"
      to="/About"
      :active="useRoute().name === 'About'"

    >
      About
    </v-btn> -->
  </v-app-bar>
</template>

<script lang="ts" setup>
import { useDisplay } from 'vuetify'
import { useRoute } from "vue-router";
import { useAppStore } from '@/store/app'

const { smAndDown } = useDisplay()

const appStore = useAppStore()

</script>
