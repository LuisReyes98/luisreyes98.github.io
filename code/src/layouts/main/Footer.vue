<template>
  <v-footer border>©{{ currentYear }} - Luis Rogelio Reyes Hernandez</v-footer>
</template>

<script lang="ts" setup>

const currentYear = new Date().getFullYear()
</script>