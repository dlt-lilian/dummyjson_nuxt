<template>
  <div class="flex mt-10 space-x-8 mx-32 justify-center">
    <!-- Produits et infos -->
    <div class="flex w-2/3 border border-gray-300 rounded-md p-4">
      <div>
        <img :src="product.images[0]" :alt="product.title" class="w-32"/>
        <img :src="product.images[1]" class="w-16"/>
        <img :src="product.images[2]" class="w-16"/>
      </div>

      <img :src="product.images[0]" :alt="product.title" class="w-1/2"/>
      <div class="space-y-4">
        <p>{{ product.title }}</p>
        <p>catégorie : {{ product.category }}</p>
        <div>
          <p>Description :</p>
          <p>{{ product.description }}</p>
        </div>
        </div>
    </div>

    <div class="w-1/3 border border-gray-300 rounded-md p-4 space-y-4">
      <p>Prix : {{ product.price }}€</p>
      <p>Note : {{ product.rating }} /5</p>
      <p>Stock : {{ product.stock }} restant</p>
      <p>Delais de livraisons : {{ product.shippingInformation }}</p>

      <UButton
          label="Ajouter au panier"
          icon="i-heroicons:shopping-bag"
          trailing
          @click="addToCart"
      />
    </div>
  </div>

  <!-- Produits associés -->
  <div class="related-products mt-16 mx-32">
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
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';
import { useProductsStore } from '~/store/main.js';

const route = useRoute();
const productsStore = useProductsStore();

const product = computed(() =>
    productsStore.products.find(p => p.id === parseInt(route.params.id))
);

const relatedProducts = computed(() => {
  if (!product.value) return [];
  return productsStore.products.filter(p => p.category === product.value.category && p.id !== product.value.id);
});

if (!product.value) {
  console.error('Produit non trouvé');
}

// Référence pour la quantité
const quantity = ref(1);

// Fonction pour ajouter un produit au panier
const addToCart = () => {
  const optionsProduct = {
    productTitle: product.value.title,
    price: product.value.price,
    img: product.value.image,
    quantity: quantity.value,
  };

  // Récupérer les produits existants dans le localStorage
  let productsInLocalStorage = JSON.parse(localStorage.getItem("cart")) || [];

  // Vérifier si le produit existe déjà
  const existingProductIndex = productsInLocalStorage.findIndex(
      (item) => item.productTitle === optionsProduct.productTitle
  );

  if (existingProductIndex !== -1) {
    // Si le produit existe déjà, mettre à jour la quantité
    productsInLocalStorage[existingProductIndex].quantity += optionsProduct.quantity;
  } else {
    // Sinon, ajouter le produit
    productsInLocalStorage.push(optionsProduct);
  }

  // Sauvegarder le panier dans le localStorage
  localStorage.setItem("cart", JSON.stringify(productsInLocalStorage));

  console.log("Produit ajouté au panier", optionsProduct);
};

w</script>
