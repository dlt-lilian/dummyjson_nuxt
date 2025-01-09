<template>
  <div class=" flex space-x-8 mx-32 justify-center">

    <!-- Produits et infos -->
    <div class="flex w-2/3 bg-primary-100 p-8 rounded-md">
      <div>
        <img :src="product.images[0]" :alt="product.title" class="w-32"/>
        <img :src="product.images[1]" class="w-16"/>
        <img :src="product.images[2]" class="w-16"/>
      </div>

      <img :src="product.images[0]" :alt="product.title" class="w-1/2"/>
      <div>
        <p>{{ product.title }}</p>
        <p>{{ product.category }}</p>
        <p>{{ product.description }}</p>
      </div>
    </div>

    <div class="w-1/3 bg-orange-100 p-8 rounded-md">
      <p>Prix : {{ product.price }}€</p>
      <p>Note : {{ product.rating }}€</p>
      <p>Stock : {{ product.stock }}€</p>
      <p>Delais de livraisons : {{ product.shippingInformation }}€</p>
    </div>

  </div>

    <!-- Produits associés -->
  <div class="related-products mt-16">
    <h2>Produits associés</h2>
    <div class="flex flex-nowrap">
      <div v-for="relatedProduct in relatedProducts" :key="relatedProduct.id" class="w-1/4 border border-gray-300 rounded-md p-4 m-2">
        <nuxt-link :to="`/products/${relatedProduct.id}`">
          <img :src="relatedProduct.images[0]" :alt="relatedProduct.title" class="h-32 mx-auto block"/>
          <h3>{{ relatedProduct.title }}</h3>
          <p>{{ relatedProduct.price }}€</p>
        </nuxt-link>
      </div>
    </div>
  </div>

</template>

<script setup>
import {useRoute} from 'vue-router'
import {useProductsStore} from '~/store/main.js'
import {computed} from 'vue'

const route = useRoute()
const productsStore = useProductsStore()

const product = computed(() =>
    productsStore.products.find(p => p.id === parseInt(route.params.id))
)

const relatedProducts = computed(() => {
  if (!product.value) return [];
  return productsStore.products.filter(p => p.category === product.value.category && p.id !== product.value.id);
});

if (!product.value) {
  console.error('Produit non trouvé')
}
</script>
