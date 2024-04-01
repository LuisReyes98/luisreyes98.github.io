<template>


  <v-container class="ma-0 pa-0 ">
    <v-row no-gutters>
      <v-col cols="12" md="4">
        <div style="position: relative">
          <v-img cover aspect-ratio="9/16" height="70vh" width="100%" max-width="550px" class="image_cropped"
            :src="imageUrl">
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
              </div>
            </template>
          </v-img>

        </div>
      </v-col>

      <v-col cols="12" md="6" class="d-flex align-center justify-center">
        <p class="pa-2" style="font-size: 1.25rem; max-width: 700px; line-height: 2;">
          I am a Lead UX Engineer, Flutter Developer for Mobile and Web at GoldenM INC.
          <br>
          <br>
          I am a computer engineer graduated from the University Jose Antonio Páez.
          I am studying to learn AI to be a machine learning engineer.
          <br>
          <br>
          My dream Job is to Use Machine Learning and AI to build systems that help shape the future of the world and
          help
          deal with global warming.
        </p>
      </v-col>
      <v-col cols="12" md="2" style="position: relative; ">
        <div style="height: 220px;"></div>
        <div style="position: absolute; bottom: 0; right: 0; left: 0; " class="pa-1">
          <h1 class="font-weight-bold " style="text-align: end;">Luis Rogelio </h1>
          <p style="text-align: end;">
            Computer Engineer
            <br>
            Web & Mobile Development
            <br>
            Currently working at <a href="https://www.linkedin.com/company/golden-m-inc/" target="_blank">GoldenM</a>
          </p>
          <div class="d-flex justify-end mt-4">
            <v-btn size="x-large" style="width: 100%;" color="red"
              href="https://www.linkedin.com/in/luis-rogelio-reyes-hern%C3%A1ndez-3a1028114/" target="_blank"
              prepend-icon="mdi-linkedin">
              Hire Me!
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <v-row no-gutters class="mb-12">
      <h1>Courses and personal projects</h1>
    </v-row>
    <v-row no-gutters>
      <v-col v-for="course in coursesAndProjects" :key="course.name" cols="12" xs="12" sm="6" md="4" lg="4">
        <course-card :logo-image="course.platformLogo" :course-logo="course.courseLogo" :link="course.link"
          :title="course.name" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import imageUrl from "@/assets/pictures/full_body_compressed.jpg";


import CourseCard from "@/components/CourseCard.vue";
import { computed } from "vue"

import { useAppStore } from '@/store/app'
const appStore = useAppStore()

const coursesAndProjects = computed(() => {
  return appStore.coursesAndProjects
})

</script>

<style lang="scss" scoped>
.image_cropped {
  // border-radius: 20% 70% 30% 60%;
  clip-path: polygon(0% 100%, 0% 0%, 100% 0%, 30% 100%, 100% 100%);
  position: relative;
}

.image-text {
  z-index: 2;
  position: absolute;
  right: 20px;
  width: 45%;
  // height: 100px;
  bottom: 20px;
}
</style>
