<template>
  <v-footer class="page_footer">
    ©{{ currentYear }} - Luis Rogelio Reyes Hernandez
  </v-footer>
</template>

<script lang="ts" setup>

const currentYear = new Date().getFullYear()
</script>

<style lang="scss" scoped>
.page_footer {
  background: rgb(202, 208, 247);
}
</style>