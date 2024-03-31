<template>
  <div class="course-card">
    <img :src="logoImage" alt="Course Logo" class="logo-image" />
    <div class="course-details">
      <h2 class="title">{{ title }}</h2>
      <h3 class="subtitle">{{ subtitle }}</h3>
      <a :href="certificateLink" class="certificate-link">
        <img :src="certificateImage" alt="Certificate" class="certificate-image" />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseCard',
  props: {
    logoImage: {
      type: String,
      required: true
    },
    certificateImage: {
      type: String,
      required: true
    },
    certificateLink: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    },
    subtitle: {
      type: String,
      required: true
    }
  }
}
</script>

<style scoped>
.course-card {
  display: flex;
  align-items: center;
  padding: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.logo-image {
  width: 80px;
  height: 80px;
  margin-right: 16px;
}

.course-details {
  flex: 1;
}

.title {
  font-size: 18px;
  margin-bottom: 8px;
}

.subtitle {
  font-size: 14px;
  color: #666;
  margin-bottom: 8px;
}

.certificate-link {
  display: inline-block;
}

.certificate-image {
  width: 120px;
  height: 90px;
}
</style>