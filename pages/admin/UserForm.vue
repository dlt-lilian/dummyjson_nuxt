<template>
  <div class="flex space-x-16 justify-center">

    <!-- Création des utilisateurs -->
    <div>
      <form @submit.prevent="submitForm" class="flex flex-col space-y-4">
        <label>Créer un utilisateur</label>
        <input v-model="name" type="text" class="border border-gray-300 bg-inherit" placeholder="nom" required>
        <input v-model="email" type="email" class="border border-gray-300 bg-inherit" placeholder="email" required>
        <input type="submit" class="border border-sky-400 bg-inherit active:border-sky-500" value="Ajouter un utilisateur">
      </form>
    </div>

    <!-- Affichage des utilisateurs -->
    <ul>
      <li v-for="body in data" :key="body.id">
        <form @submit.prevent="delForm(body.id)">
          <p>ID: {{ body.id }}</p>
          <p>Email: {{ body.email }}</p>
          <p>Name: {{ body.name }}</p>
          <input type="submit" class="border border-red-400 active:border-red-500 px-4" value="supprimer l'utilisateur">
        </form>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const email = ref('');

// Récupération des données depuis l'API
const { data, refresh } = await useFetch('/api/hello', {
  method: 'GET',
});
console.log(data);

// Fonction pour ajouter un utilisateur
const submitForm = async () => {
  const newUser = {
    name: name.value,
    email: email.value
  };

  try {
    const response = await useFetch('/api/hello', {
      method: 'POST',
      body: newUser
    });

    if (response.ok) {
      console.log('User added:', response);
      name.value = '';
      email.value = '';
      await refresh();  // Rafraîchir la liste des utilisateurs
    } else {
      console.error('Error adding user:', response);
    }
  } catch (error) {
    console.error('Error adding user:', error);
  }
};

// Fonction pour supprimer un utilisateur

const delForm = async (userId: number) => {
  const delUser = {
    id: userId,
  };

  try {
    const response = await useFetch('/api/hello', {
      method: 'DELETE',
      body: delUser
    });

    if (response.ok) {
      console.log('User deleted:', response);
      id.value = '';
      await refresh();  // Rafraîchir la liste des utilisateurs
    } else {
      console.error('Error deleting user:', response);
    }
  } catch (error) {
    console.error('Error deleting user:', error);
  }
};
</script>
