<template>
  <v-footer class="page_footer">
    ©{{ currentYear }} - Luis Rogelio Reyes Hernandez
  </v-footer>
</template>

<script lang="ts" setup>

const currentYear = new Date().getFullYear()
</script>

<style lang="scss" scoped>
@import '../../styles/settings.scss';

.page_footer {
  background: $fotter-color;
}
</style>