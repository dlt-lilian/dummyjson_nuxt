<template>
  <div class="mx-64 my-16 space-y-8">
    <UProgress :value="-25" :min="-50" :max="50" />
    <h1>Votre panier</h1>

    <!-- Si le panier est vide, afficher ce message -->
    <div v-if="cart.length === 0">Votre panier est vide.</div>

    <!-- Sinon, afficher la liste des produits -->
    <div v-else>
      <ul class="space-y-8">
        <li v-for="item in cart" :key="item.productTitle" class="space-y-2">
          <!-- Afficher directement les informations stockées dans le panier -->
          <img src="#" alt="`image de {{item.productTitle}}`">
          <h2>Nom du produit : {{ item.productTitle }}</h2>
          <div class="flex space-x-4">
            <p>Quantité :</p>
            <UButton
                icon="heroicons:minus"
                class="w-5 h-5 justify-center"
                @click="decreaseQuantity(item)"
            />

            <p>{{ item.quantity }}</p>

            <UButton
                icon="heroicons:plus"
                class="w-5 h-5 justify-center"
                @click="increaseQuantity(item)"
            />
          </div>
          <div>
            <p v-if="item.price === 0">Prix non disponible</p>
            <p v-else-if="item.price && !isNaN(item.price)">Prix : {{ item.price }}€</p>
            <p v-else class="bg-red-500 w-max px-4 font-semibold">Erreur, prix invalide</p>
          </div>
          <button @click="removeFromCart(item.productTitle)" class="border border-red-400 active:border-red-500 px-4">
            Supprimer le produit du panier
          </button>
          <UDivider size="sm" />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Déclarer une variable pour le panier
const cart = ref([]);

// Récupérer les produits du panier depuis le localStorage à l'initialisation
onMounted(() => {
  const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
  cart.value = storedCart;
});

// Supprimer un produit du panier
const removeFromCart = (productTitle) => {
  const updatedCart = cart.value.filter(item => item.productTitle !== productTitle);

  localStorage.setItem('cart', JSON.stringify(updatedCart));
  cart.value = updatedCart;
};

// Fonction pour diminuer la quantité
const decreaseQuantity = (item) => {
  if (item.quantity > 1) {
    item.quantity--;
    updateCart(item);
  } else if (item.quantity === 1) {
    // Si la quantité est 1 et que l'utilisateur clique sur "moins", supprimer l'article du panier
    removeFromCart(item.productTitle);
  }
};

// Fonction pour augmenter la quantité
const increaseQuantity = (item) => {
  item.quantity++; // Augmente la quantité
  updateCart(item); // Mettre à jour le panier dans le localStorage
};

// Fonction pour mettre à jour le panier dans le localStorage
const updateCart = (updatedItem) => {
  const updatedCart = cart.value.map(item =>
      item.productTitle === updatedItem.productTitle ? updatedItem : item
  );
  localStorage.setItem('cart', JSON.stringify(updatedCart));
  cart.value = updatedCart;
};
</script>
