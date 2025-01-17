<!--<template>-->
<!--  <div class="flex space-x-16 justify-center">-->

<!--    &lt;!&ndash; Création des utilisateurs &ndash;&gt;-->
<!--    <div>-->
<!--      <form @submit.prevent="submitForm" class="flex flex-col space-y-4">-->
<!--        <label>Créer un utilisateur</label>-->
<!--        <input v-model="name" type="text" class="border border-gray-300 bg-inherit" placeholder="nom" required>-->
<!--        <input v-model="email" type="email" class="border border-gray-300 bg-inherit" placeholder="email" required>-->
<!--        <input v-model="password" type="password" class="border border-gray-300 bg-inherit" placeholder="Mdp" required>-->
<!--        <input type="submit" class="border border-sky-400 bg-inherit active:border-sky-500" value="Ajouter un utilisateur">-->
<!--      </form>-->
<!--    </div>-->

<!--    &lt;!&ndash; Affichage des utilisateurs &ndash;&gt;-->
<!--    <ul>-->
<!--      <li v-for="user in users" :key="user.id">-->
<!--        <form @submit.prevent="delForm(user.id)">-->
<!--          <p>ID: {{ user.id }}</p>-->
<!--          <p>role: {{ user.role }}</p>-->
<!--          <p>Name: {{ user.name }}</p>-->
<!--          <p>Email: {{ user.email }}</p>-->
<!--          <p>Password: {{ user.password }}</p>-->
<!--          <input type="submit" class="border border-red-400 active:border-red-500 px-4" value="supprimer l'utilisateur">-->
<!--        </form>-->
<!--      </li>-->
<!--    </ul>-->
<!--  </div>-->
<!--</template>-->

<!--<script setup lang="ts">-->
<!--import { ref } from 'vue';-->







<!--// Champs du formulaire-->
<!--const name = ref('');-->
<!--const role = ref('user');-->
<!--const email = ref('');-->
<!--const password = ref('');-->


<!--// Liste des utilisateurs-->
<!--const users = ref([]);-->

<!--// Récupération des données depuis l'API au chargement-->
<!--const fetchUsers = async () => {-->
<!--  const { data, error } = await useFetch('/api/user', { method: 'GET' });-->

<!--  if (!error.value) {-->
<!--    users.value = data.value; // Charger les utilisateurs dans la liste-->
<!--  } else {-->
<!--    console.error('Error fetching users:', error.value);-->
<!--  }-->
<!--};-->
<!--await fetchUsers(); // Charger la liste des utilisateurs-->

<!--// Fonction pour ajouter un utilisateur-->
<!--const submitForm = async () => {-->
<!--  const newUser = {-->
<!--    name: name.value,-->
<!--    role: role.value,-->
<!--    email: email.value,-->
<!--    password: password.value-->
<!--  };-->

<!--  try {-->
<!--    const { data, error } = await useFetch('/api/user', {-->
<!--      method: 'POST',-->
<!--      body: newUser,-->
<!--    });-->

<!--    if (!error.value) {-->
<!--      console.log('User added:', data.value);-->

<!--      // Réinitialiser les champs du formulaire-->
<!--      name.value = '';-->
<!--      email.value = '';-->
<!--      password.value = '';-->

<!--      // Recharger la liste des utilisateurs-->
<!--      await fetchUsers();-->
<!--    } else {-->
<!--      console.error('Error adding user:', error.value);-->
<!--    }-->
<!--  } catch (err) {-->
<!--    console.error('Error adding user:', err);-->
<!--  }-->
<!--};-->

<!--// Fonction pour supprimer un utilisateur-->
<!--const delForm = async (userId: number) => {-->
<!--  try {-->
<!--    const { data, error } = await useFetch('/api/user', {-->
<!--      method: 'DELETE',-->
<!--      body: { id: userId },-->
<!--    });-->

<!--    if (!error.value) {-->
<!--      console.log('User deleted:', data.value);-->

<!--      // Recharger la liste des utilisateurs-->
<!--      await fetchUsers();-->
<!--    } else {-->
<!--      console.error('Error deleting user:', error.value);-->
<!--    }-->
<!--  } catch (err) {-->
<!--    console.error('Error deleting user:', err);-->
<!--  }-->
<!--};-->
<!--</script>-->



<template>
  <div class="flex space-x-16 justify-center my-8">

    <!-- recherche de produit-->
    <div>
      <UInput placeholder="Rechercher un produit..." color="none" />
    </div>
    <!-- Création des produits -->
    <div>
      <form @submit.prevent="submitForm" class="flex flex-col space-y-4">
        <label>Créer un produit</label>
        <input v-model="title" type="text" class="border border-gray-300 bg-inherit" placeholder="Titre" required>
        <input v-model="reference" type="text" class="border border-gray-300 bg-inherit" placeholder="reference" required>
        <input v-model="brand" type="text" class="border border-gray-300 bg-inherit" placeholder="Marque">
        <input v-model="category" type="text" class="border border-gray-300 bg-inherit" placeholder="Catégorie">
        <input v-model="description" type="text" class="border border-gray-300 bg-inherit" placeholder="description">
        <input v-model="price" type="number" class="border border-gray-300 bg-inherit" placeholder="Prix">
        <input v-model="review" type="number" class="border border-gray-300 bg-inherit" placeholder="Note">

        <!--  img avec affichage-->
        <input type="file" accept="image/*" class="border border-gray-300 rounded px-4 py-2" @change="handleFileUpload"
        />
        <div v-if="previewUrl" class="mt-4">
          <p class="text-sm text-gray-500">Aperçu :</p>
          <img :src="previewUrl" alt="Aperçu de l'image" class="w-32 h-32 object-cover rounded"/>
        </div>

        <input type="submit" class="border border-sky-400 bg-inherit active:border-sky-500" value="Ajouter un produit">
      </form>
    </div>

    <!-- Affichage des produits -->
    <ul class="space-y-4">
      <li v-for="product in products" :key="product.id">
        <form @submit.prevent="delForm(product.id)" class="flex space-x-4">
          <img :src="product.image" class="w-64"/>
          <div>
          <p>ID: {{ product.id }}</p>
          <p>Titre: {{ product.title }}</p>
          <p>Marque: {{ product.brand }}</p>
          <p>Catégorie: {{ product.category }}</p>
          <p>Reference: {{ product.reference }}</p>
          <p>Description: {{ product.description }}</p>
          <p>Prix: {{ product.price }}</p>
          <p>Note: {{ product.review }}</p>
            <input type="submit" class="border border-red-400 active:border-red-500 px-4" value="supprimer un produit">
          </div>

        </form>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Champs du formulaire
const title = ref('');
const brand = ref('');
const reference = ref('');
const description = ref('');
const category = ref('');
const price = ref<number | null>(null);
const review = ref('');
const image = ref<File | null>(null);
const previewUrl = ref<string | null>(null);

// Liste des produits
const products = ref([]);

// Fonction pour gérer le téléchargement d'image
const handleFileUpload = (event: Event) => {
  const file = (event.target as HTMLInputElement).files?.[0] || null;

  if (file) {
    image.value = file;
    previewUrl.value = URL.createObjectURL(file); // URL pour l'aperçu de l'image
  } else {
    image.value = null;
    previewUrl.value = null;
  }
};

// Récupération des données depuis l'API au chargement
const fetchProducts = async () => {
  const { data, error } = await useFetch('/api/product', { method: 'GET' });

  if (!error.value) {
    products.value = data.value; // Charger les produits dans la liste
  } else {
    console.error('Error fetching products:', error.value);
  }
};
await fetchProducts(); // Charger la liste des produits

// Fonction pour ajouter un produit
const submitForm = async () => {
  const newProduct = {
    title: title.value,
    brand: brand.value,
    reference: reference.value,
    category: category.value,
    description: description.value,
    price: price.value,
    review: review.value,
    image: previewUrl.value, // Assurez-vous que l'image est bien prise en charge
  };

  try {
    const { data, error } = await useFetch('/api/product', {
      method: 'POST',
      body: newProduct,
    });

    if (!error.value) {
      console.log('Product added:', data.value);

      // Réinitialiser les champs du formulaire
      title.value = '';
      brand.value = '';
      reference.value = '';
      category.value = '';
      description.value = '';
      price.value = null;
      review.value = '';
      image.value = null;
      previewUrl.value = null;

      // Recharger la liste des produits
      await fetchProducts();
    } else {
      console.error('Error adding product:', error.value);
    }
  } catch (err) {
    console.error('Error adding product:', err);
  }
};

// Fonction pour supprimer un produit
const delForm = async (productId: number) => {
  try {
    const { data, error } = await useFetch('/api/product', {
      method: 'DELETE',
      body: { id: productId },
    });

    if (!error.value) {
      console.log('Product deleted:', data.value);

      // Recharger la liste des produits
      await fetchProducts();
    } else {
      console.error('Error deleting product:', error.value);
    }
  } catch (err) {
    console.error('Error deleting product:', err);
  }
};
</script>

