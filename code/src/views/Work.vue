<template>
  <!-- <div style="background-color: #404360;">Work</div> -->
  <project
    :title="openSourceWidgetMarkerProject.title"
    :description="openSourceWidgetMarkerProject.description"
    :color="openSourceWidgetMarkerProject.color"
    :image-url="openSourceWidgetMarkerProject.imageUrl"
    :links="openSourceWidgetMarkerProject.links"
    :technologies="openSourceWidgetMarkerProject.technologies"/>
  <div style="height: 200px;"></div>
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
import FlutterSVGLogo from '@/assets/project_logos/flutter_transparent.svg';
import GooglePlayLogo from '@/assets/logos/google_play-icon.svg';

const mainProject = {
  title: 'In Time',
  description: 'A time management app using the Pomodoro technique. This apps improves the normal pomodoro by being more flexible in the time of the Pomodoro and the break. And even counting the extra time for when you have worked too much or taken a long break.',
  color: '#404360',
  imageUrl: InTimeSVG,
  links: [
    {
      title: 'Currently Unavailable',
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

const openSourceWidgetMarkerProject = {
  title: 'widget_marker_google_maps_flutter',
  description: 'Open source contribution and maintenance of the package widget_marker_google_maps_flutter , creates as a fork of the package widget_marker_google_maps, that was no longer maintained by the original author.',
  color: '#042B59',
  imageUrl: FlutterSVGLogo,
  links: [
    {
      title: 'Pub.dev',
      url: 'https://pub.dev/packages/widget_marker_google_maps_flutter',
      logo: '',
      icon: ''
    }
  ],
  technologies: [
    {
      name: 'Flutter',
      logo: '',
      description: ''
    },
  ]
}
</script>