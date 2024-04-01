<template>

  <v-card class="course-card pa-2 ma-2">
    <a :href="link" target="_blank" class="certificate-link">
      <div class="d-flex justify-space-between ">
        <img :src="logoImage" class="logo-image" />
        <div class="d-flex align-center">
          <h3 class="title">{{ title }}</h3>
        </div>
        <img :src="courseLogo" class="course-logo" />
      </div>
    </a>
  </v-card>

</template>

<script>
export default {
  name: 'CourseCard',
  props: {
    logoImage: {
      type: String,
      required: true
    },
    courseLogo: {
      type: String,
      required: true
    },
    link: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
  }
}
</script>

<style scoped lang="scss">
.course-card {
  padding: 4px;
  border-radius: 25px;
  transition: all 0.3s;

  &:hover {
    transform: scale(1.05);
  }
}

.logo-image {
  width: 30px;
  height: 30px;
  border-radius: 50%;
  margin-right: 10px;
}

a {
  text-decoration: none;
  color: inherit;

  &:hover,
  &:focus,
  &:active {
    text-decoration: none;
    color: inherit;
  }
}


.course-logo {
  width: 80px;
  height: 80px;
  margin-left: 5px;
}
</style>