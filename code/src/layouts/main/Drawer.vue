<template>
  <v-navigation-drawer  v-model="drawer" location="top" expand-on-hover temporary :color="appBarColor">

    <v-list nav>
      <!-- Close item -->
      <v-list-item @click="drawer = false">
        <v-btn
          icon="mdi-chevron-left"
          variant="text"
          :style="`color: ${calculateTextColor(appBarColor)}`"
        />
      </v-list-item>

      <v-list-item 
        v-for="item in appStore.routes"
        :key="item.title" link :to="item.to"
        :title="item.title"
        :active="useRoute().name === item.title"
        :style="`color: ${calculateTextColor(appBarColor)}`"
      />
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup >
import { computed } from "vue"
import { useRoute } from 'vue-router'

import { useAppStore } from '@/store/app'
import { calculateTextColor } from '@/utils/colors'


const appStore = useAppStore()


// props
const props = defineProps<{
  modelValue: boolean
}>()
// emits
const emit = defineEmits(['update:modelValue'])
// computed
const drawer = computed({
  get: () => props.modelValue,
  set: (value) => emit('update:modelValue', value)
})

// computed
const appBarColor = computed(() => {
  // index
  var index = useRoute().name?.toString() || '';
  return appStore.appBarColorByRoute[index];
})

</script>

