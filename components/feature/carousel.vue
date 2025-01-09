<script setup lang="ts">
const items = [
  'https://www.mecaservicesshop.fr/modules/angarslider/views/img/images/1471ca02e1137b6d42e6863025be44169137a6a2_Sans%20titre%2024.jpg',
  'https://www.mecaservicesshop.fr/modules/angarslider/views/img/images/249a506f7bd89a2f9a0c90e14dc8c719c09ad5f9_SEGWAY.png',
  'https://www.mecaservicesshop.fr/modules/angarslider/views/img/images/013e17f2764decec2899381e19114dede9e76412_EGO_POWER_BATTERIE_SLIDER_02.png',
  'https://www.mecaservicesshop.fr/modules/angarslider/views/img/images/feefcff576931ad5ce1b8de6df98080fdf01f16c_PROMO%20TAILLE%20HAIE%20SOLO.jpg',
  'https://www.mecaservicesshop.fr/modules/angarslider/views/img/images/e091bbb97a2e433bfc79f067a69a296772b06c4a_Sans%20titre%209-min-min.png',
  'https://www.mecaservicesshop.fr/modules/angarslider/views/img/images/3aa0396b8eeae4973fccaa6d10de5780f6cb6bf1_EGO_POWER_BATTERIE_SLIDER_01.png'
]
</script>

<template>
  <UCarousel v-slot="{ item }" :items="items" :ui="{ item: 'basis-full' }" class="rounded-lg overflow-hidden" indicators>
    <img :src="item" class="w-full" draggable="false">
  </UCarousel>
</template>