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
          <div class="image-text ">
            <h1 class="font-weight-bold " style="text-align: end;">Luis Rogelio </h1>
            <p style="text-align: end;">
              Ingeniero en computacion
              <br>
              Desarrollador Web y Mobile
              <br>
              Actualmente parte de GoldenM
            </p>
            <div class="d-flex justify-end ma-2">
              <v-btn size="x-large" color="red">
                Hire Me!
              </v-btn>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12" md="6" class="">
        <p class="pa-2">
          Eiusmod magna aliquip deserunt do ea in dolore labore quis incididunt enim ad. Occaecat enim consequat officia
          commodo velit est quis cillum quis excepteur dolor. Velit nostrud minim do reprehenderit anim magna enim esse
          laborum est mollit. Consectetur dolor non quis consectetur reprehenderit ex exercitation commodo. Magna ipsum do
          proident laborum. Tempor proident ut sunt reprehenderit in.
        </p>

      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="knowledge in languagesKnowledge" :key="knowledge.name" cols="2">
        <knowledge-card :knowledge="knowledge" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts" setup>
import imageUrl from "@/assets/pictures/full_body_compressed.jpg";

import jsLogo from "@/assets/logos/javascript.svg";
import flutterLogo from "@/assets/logos/flutter.svg";

import KnowledgeCard from "@/components/KnowledgeCard.vue";

const languagesKnowledge = [
  {
    'name': 'Javascript',
    'logo': jsLogo,
    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  },
  {
    'name': 'Flutter',
    'logo': flutterLogo,
    'description': 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
  }
]
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
