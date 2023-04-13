<template>
  <!-- <div style="background-color: #404360;">Work</div> -->
  <!-- <div style="height: 200px;"></div> -->
  <project :title="mainProject.title" :description="mainProject.description" :color="mainProject.color"
    :image-url="mainProject.imageUrl" />
  <div style="height: 800px;"></div>
</template>

<script lang="ts" setup>
import Project from '@/components/Project.vue';
import InTimeSVG from '@/assets/project_logos/intime_logo.svg';

const mainProject = {
  title: 'In Time',
  description: 'A time management app using the Pomodoro technique.',
  color: '#404360',
  imageUrl: InTimeSVG,
  links: [
    {
      title: 'Google Play',
      url: 'https://play.google.com/store/apps/details?id=com.lrrh.intime',
      logo: ''
    }
  ],
  technologies: [
    {
      name: 'Flutter',
      logo: '',
      description: ''
    },
    {
      name: 'Kotlin',
      logo: '',
      description: ''
    }
  ]


}
</script>