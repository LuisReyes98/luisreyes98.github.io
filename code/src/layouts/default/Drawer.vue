<template>
  <v-navigation-drawer
    v-model="drawer"
  >

    <v-list nav>
    <!-- Close item -->
    <v-list-item
      @click="drawer=false"
    >
      <v-btn
        icon="mdi-chevron-left"
        variant="text"
        
      />
    </v-list-item>

    <v-list-item
      v-for="item in items"
      :key="item.title"
      link
      :to="item.to"
      :title="item.title"
      :prepend-icon="item.icon"
      :active="useRoute().name === item.title"
    />
    </v-list>
  </v-navigation-drawer>
</template>

<script lang="ts" setup >
  import { computed } from "vue"
  import { useRoute } from 'vue-router'


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

  const items = [
    {
      title: 'Home',
      to: '/',
      icon: 'mdi-home'
    },
    {
      title: 'About',
      to: '/about',
      icon: 'mdi-account'
    },
    // {
    //   title: 'Hire me',
    //   to: '/hire-me',
    //   icon: 'mdi-account'
    // }
  ]

</script>

