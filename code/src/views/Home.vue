<template>
  <!-- <HelloWorld /> -->
  <v-container>
    <v-row>
      <v-col xs="12" sm="6">
        <div style="position: relative;">
          <v-img
            cover
            width="100%"
            height="60vh"
            class="image_cropped"
            :src="imageUrl"
          >
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular
                  color="grey-lighten-4"
                  indeterminate
                ></v-progress-circular>
              </div>
            </template>
          </v-img>
          <h2
            class=" font-weight-bold image-text"
          >
            Luis Rogelio
          </h2>
        </div>
      </v-col>
      <v-col xs="12">
        <h1>Who am I</h1>
      </v-col>
    </v-row>
    <v-row>
      
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
  import imageUrl from '@/assets/pictures/full_body_compressed.jpg'
</script>

<style lang="scss" scoped>
.image_cropped {
  // border-radius: 20% 70% 30% 60%;
  clip-path: polygon(0% 100%, 0% 0%, 100% 0%, 30% 100%, 100% 100%);
  aspect-ratio: 4 / 3;
  position: relative;
}

.image-text{
  z-index: 2;
  position: absolute;
  right: 0;
  width: 140px;
  height: 100px;
  bottom: 0;
  transform: translate(-50%, -50%);
  font-size: 3rem;
}
</style>
