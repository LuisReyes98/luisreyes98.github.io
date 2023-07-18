<template>
  <!-- <div style="background-color: #404360;">Work</div> -->
  <!-- <div style="height: 200px;"></div> -->
  <project
    :title="mainProject.title"
    :description="mainProject.description"
    :color="mainProject.color"
    :image-url="mainProject.imageUrl"
    :links="mainProject.links"
    :technologies="mainProject.technologies"
  />
  <div style="height: 800px;"></div>
</template>

<script lang="ts" setup>
import Project from '@/components/Project.vue';
import InTimeSVG from '@/assets/project_logos/intime_logo.svg';
import GooglePlayLogo from '@/assets/logos/google_play-icon.svg';

const mainProject = {
  title: 'In Time',
  description: 'A time management app using the Pomodoro technique. This apps improves the normal pomodoro by being more flexible in the time of the Pomodoro and the break. And even counting the extra time for when you have worked too much or taken a long break.',
  color: '#404360',
  imageUrl: InTimeSVG,
  links: [
    {
      title: 'Download Now',
      url: 'https://play.google.com/store/apps/details?id=com.lrrh.intime',
      logo: GooglePlayLogo,
      icon: 'mdi-android'
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