<template>
  <div :style="mainStyle()" class="pa-10">
    <v-row no-gutters>
      <v-col cols="12" >
        <h1
          :style="textStyle()"
          class="title"
        >
          {{ title }}
        </h1>
      </v-col>
      <v-col
        cols="12"
        md="3"
        class="d-flex justify-center"
      >
        <v-img
          :src="imageUrl"
          height="200px"
          width="200px"
        />
      </v-col>
      <v-col
        cols="12"
          md="6"
      >
        <p
          :style="textStyle()"
          class="description"
        >{{ description }}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        cols="12"
        md="3"
      >
        <div
          v-for="link in links"
          :key="link.title"
          class="links-content"
        >
          <div class="d-flex pb-4">
            <v-img
              :src="link.logo"
              height="64px"
              width="64px"
            />
          </div>
          <v-btn
            :href="link.url"
            target="_blank"
            class="mx-2"
            size="x-large"
            rounded="pill"
            variant="tonal"
            :style="`color: ${calculateTextColor(color)}`"
            :prepend-icon="link.icon"
          >
            {{ link.title }}
          </v-btn>

        </div>
      </v-col>
      <v-col
        cols="9"
      >

      </v-col>
    </v-row>
  </div>
</template>

<script lang="ts" setup>
import { calculateTextColor } from '@/utils/colors'

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
  links: {
    title: string
    url: string
    logo: string
    icon: string
  }[]
  technologies: {
    name: string
    logo: string
    description: string
  }[]
}>()

function mainStyle() {
  return {
    background: props.color,
    width: '100%',
    boxShadow: `0px 60px 100px 200px ${props.color} `,
  }
}

function textStyle() {
  return {
    color: calculateTextColor(props.color),
  }
}


</script>

<style lang="scss" scoped>
  .description{
    font-size: 1.25rem;
    text-align: center;
    line-height: 2;

  }

  .title{
    font-size: 2.5rem;
    text-align: center;
  }

  .links-content{
    justify-content: center;
    align-items: center;
    text-align: center;
    display: block;
  }
</style>