<template>
  <div class="flex w-full space-x-4">
    <!-- Section de gauche -->
    <div class="w-1/2">
      <!-- Image principale -->
      <ULink
          class="bg-black w-full aspect-[4/3] rounded-md mb-4 bg-cover bg-center flex items-left justify-top relative"
          :style="{ backgroundImage: `url('${bg[0].image}')` }"
      >
        <div class="text-left text-white space-y-4 p-4 w-1/2">
          <h1 class="font-bold text-2xl">
            {{ bg[0].title }}
          </h1>
          <p class="font-bold text-2xl">
            {{ bg[0].text }}
          </p>
        </div>
      </ULink>

      <!-- Deux petits conteneurs en bas -->
      <div class="flex space-x-4">
        <ULink
            class="w-1/2 aspect-[4/3] bg-black rounded-md mb-4 bg-cover bg-center flex items-left justify-top relative"
            :style="{
              backgroundImage: `url('${bg[1].image}')`,
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',}"
            :link="bg[1].link"
        >
          <div class="text-left text-white space-y-4 p-4">
            <h1 class="font-bold text-xl">
              {{ bg[1].title }}
            </h1>
            <p class="font-bold text-lg">
              {{ bg[1].text }}
            </p>
          </div>
          <!-- Contenu optionnel -->
        </ULink>
        <ULink
            class="w-1/2 aspect-[4/3] bg-black rounded-md mb-4 bg-cover bg-center flex items-left justify-top relative"
            :style="{ backgroundImage: `url('${bg[2].image}')` }"
            :link="bg[2].link"
        >
          <div class="text-left text-white space-y-4 p-4">
            <h1 class="font-bold text-xl">
              {{ bg[2].title }}
            </h1>
            <p class="font-bold text-lg">
              {{ bg[2].text }}
            </p>
          </div>
          <!-- Contenu optionnel -->
        </ULink>
      </div>
    </div>

    <!-- Section de droite -->
    <div class="w-1/2">
      <!-- Deux petits conteneurs en haut -->
      <div class="flex space-x-4">
        <ULink
            class="w-1/2 aspect-[4/3] bg-black rounded-md mb-4 bg-cover bg-center flex items-left justify-top relative"
            :style="{ backgroundImage: `url('${bg[3].image}')` }"
            :link="bg[3].link"
        >
          <div class="text-left text-white space-y-4 p-4">
            <h1 class="font-bold text-xl">
              {{ bg[3].title }}
            </h1>
            <p class="font-bold text-lg">
              {{ bg[3].text }}
            </p>
          </div>
          <!-- Contenu optionnel -->
        </ULink>
        <ULink
            class="w-1/2 aspect-[4/3] bg-black rounded-md mb-4 bg-cover bg-center flex items-left justify-top relative"
            :style="{ backgroundImage: `url('${bg[4].image}')` }"
            :link="bg[4].link"
        >
          <div class="text-left text-white space-y-4 p-4">
            <h1 class="font-bold text-xl">
            </h1>
            <p class="font-bold text-lg">
              {{ bg[4].text }}
            </p>
          </div>
          <!-- Contenu optionnel -->
        </ULink>
      </div>

      <!-- Image principale en bas -->
      <ULink
          class="bg-black w-full aspect-[4/3] rounded-md mb-4 bg-cover bg-center flex items-left justify-top relative"
          :style="{ backgroundImage: `url('${bg[5].image}')` }"
          :link="bg[5].link"
      >
        <div class="text-left text-white space-y-4 p-4 w-1/2">
          <h1 class="font-bold text-2xl">
            {{ bg[5].title }}
          </h1>
          <p class="font-bold text-xl">
            {{ bg[5].text }}
          </p>
        </div>
        <!-- Contenu optionnel -->
      </ULink>
    </div>
  </div>
</template>

<script setup lang="ts">
const bg = [
  {
    title:'Découvrez les promos de janvier',
    text: 'Jusqu’a -30% sur une selection d’article',
    image: 'https://img.freepik.com/vecteurs-libre/icone-pourcentage-comptable-fond-jaune-pour-entreprises_1017-45138.jpg?t=st=1736957521~exp=1736961121~hmac=13c795589227cadbe6a58b3cc53252ce1576e56a612fc1fbf85be8faff69afa3&w=1380',
    link: 'https://picsum.photos/seed/picsum/1920/1080',
  },
  {
    title:'-5% sur toute la gamme EGO-Power',
    text: '',
    image: 'https://egopowerplus.fr/themes/egopowerplus/images/EGO-Brand-White.svg',
    link: 'https://picsum.photos/seed/picsum/1920/1080',
  },
  {
    title:'Découvrez les robots Segway Navimow',
    text: '',
    image: 'https://wil-portal.s3.eu-central-1.amazonaws.com/2024-1-12/6fa98e76-7f79-4890-8ff0-6a677e6f006a.png',
    link: 'https://picsum.photos/seed/picsum/1920/1080',
  },
  {
    title:'Découvrez les promos de janvier',
    text: 'text 4',
    image: 'https://picsum.photos/seed/picsum/1920/1080',
    link: 'https://picsum.photos/seed/picsum/1920/1080',
  },
  {
    title:'Découvrez les promos de janvier',
    text: 'text 5',
    image: 'https://picsum.photos/seed/picsum/1920/1080',
    link: 'https://picsum.photos/seed/picsum/1920/1080',
  },
  {
    title:'OFFRE EGO POWER',
    text: 'Une Batterie 5,0 ah  offerte des 899€ d’achat sur votre panier EGO-Power',
    image: 'https://egopowerplus.fr/sites/default/files/2023-07/product-battery_0.png',
    link: 'https://picsum.photos/seed/picsum/1920/1080',
  },
];
</script>
