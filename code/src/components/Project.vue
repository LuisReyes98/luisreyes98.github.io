<template>
  <div :style="mainStyle()" class="pa-10">
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <h1>{{ title }}</h1>
        <p>{{ description }}</p>
        <v-img :src="imageUrl" height="200px" width="200px" />
      </v-col>
      <v-col cols="12" md="6">
      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
/**
 * Props
 *
 * title: string
 * description: string
 * color: string
 * imageUrl: string
 */
const props = defineProps<{
  title: string
  description: string
  color: string
  imageUrl: string
}>()

function mainStyle() {
  return {
    background: props.color,
    width: '100%',
    boxShadow: `0px 60px 100px 200px ${props.color} `,
  }
}
</script>