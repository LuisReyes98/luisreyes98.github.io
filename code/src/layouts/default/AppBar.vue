<template>
  <v-app-bar
    :elevation="2"
  >
    <v-btn
      icon
      @click="$emit('toggle-drawer')"
    >
      <v-icon>mdi-menu</v-icon>
    </v-btn>
    <v-app-bar-title>
      Luis Rogelio {{useRoute().name}}
    </v-app-bar-title>
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
  import { useRoute } from 'vue-router'

</script>
