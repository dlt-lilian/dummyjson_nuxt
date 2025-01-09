<template>
  <div class="flex w-3/4 m-auto my-16 space-x-4">
    <div class="flex flex-col w-1/4 space-y-4">
      <input type="search" class="border-2 rounded-md border-gray-300" v-model="searchQuery" placeholder="Rechercher un produit...">

      <label><input type="checkbox" class="mr-4" value="beauty" v-model="selectedCategories">Beauté</label>
      <label><input type="checkbox" class="mr-4" value="fragrances" v-model="selectedCategories">Parfum</label>
      <label><input type="checkbox" class="mr-4" value="furniture" v-model="selectedCategories">Maison</label>
      <label><input type="checkbox" class="mr-4" value="groceries" v-model="selectedCategories">Consommable</label>
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-3/4">
      <!-- Boucle sur chaque produit pour afficher son nom dans une balise h1 et son image -->
      <div v-motion-pop-visible-once v-for="product in filteredProducts" :key="product.id" class="border border-gray-300 rounded-md">
        <nuxt-link :to="`/products/${product.id}`">
          <div class=" w-48 h-48 flex items-center justify-center">
            <img :src="product.images[0]" :alt="product.title" class="max-h-full flex justify-center items-center"/>
          </div>
          <h1>{{ product.title }}</h1>
          <h1>{{ product.price }}€</h1>
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue';
import {useProductsStore} from "~/store/main.js";
import ColorMode from "/components/theme/ColorMode.vue";

// Utilisation du store
const productsStore = useProductsStore();
const products = ref([]);
const selectedCategories = ref([]);
const searchQuery = ref('');

// Récupération des produits lors du montage du composant
onMounted(async () => {
  await productsStore.fetchProducts(); // Appel de l'action pour récupérer les produits
  products.value = productsStore.products; // Mise à jour de la référence locale
  console.log(products.value); // Vérifiez le contenu ici
});

// Méthode calculée pour filtrer les produits par catégorie et nom
const filteredProducts = computed(() => {
  let filtered = products.value;

  if (selectedCategories.value.length > 0) {
    filtered = filtered.filter(product => selectedCategories.value.includes(product.category));
  }

  if (searchQuery.value) {
    filtered = filtered.filter(product => product.name.toLowerCase().includes(searchQuery.value.toLowerCase()));
  }

  return filtered;
});
</script>
