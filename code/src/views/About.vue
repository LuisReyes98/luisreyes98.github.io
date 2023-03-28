<template>
  <!-- <HelloWorld /> -->
  <v-container class="ma-0 pa-0">
    <v-row no-gutters>
      <v-col cols="12" md="6">
        <div style="position: relative">
          <v-img cover aspect-ratio="9/16" height="70vh" width="100%" max-width="550px" class="image_cropped"
            :src="imageUrl">
            <template v-slot:placeholder>
              <div class="d-flex align-center justify-center fill-height">
                <v-progress-circular color="grey-lighten-4" indeterminate></v-progress-circular>
              </div>
            </template>
          </v-img>
          <h2 class="font-weight-bold image-text">Luis Rogelio</h2>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="">
        <p>
          Eiusmod magna aliquip deserunt do ea in dolore labore quis incididunt enim ad. Occaecat enim consequat officia
          commodo velit est quis cillum quis excepteur dolor. Velit nostrud minim do reprehenderit anim magna enim esse
          laborum est mollit. Consectetur dolor non quis consectetur reprehenderit ex exercitation commodo. Magna ipsum do
          proident laborum. Tempor proident ut sunt reprehenderit in.
        </p>
        <v-btn size="x-large" color="red">
          Hire Me!
        </v-btn>
      </v-col>
    </v-row>
  </v-container>

  <!-- <v-container class="pa-0">
    <v-row no-gutt>
      <v-col xs="12" sm="6" class=""> Hola </v-col>
    </v-row>
  </v-container> -->
</template>

<script lang="ts" setup>
import imageUrl from "@/assets/pictures/full_body_compressed.jpg";
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
  right: 0;
  width: 140px;
  height: 100px;
  bottom: 0;
  transform: translate(-50%, -50%);
  font-size: 3rem;
}
</style>
