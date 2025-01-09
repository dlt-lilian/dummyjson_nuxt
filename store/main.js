import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [], // Liste des produits
    }),
    actions: {
        async fetchProducts() {
            const response = await fetch('https://dummyjson.com/products');
            const data = await response.json();
            console.log(data.products); // Vérifiez ici si les produits sont récupérés
            this.products = data.products; // Met à jour l'état avec les produits
        },
    },
});
