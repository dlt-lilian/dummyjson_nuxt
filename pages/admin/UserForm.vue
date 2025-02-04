<template>
  <div class="flex space-x-16 justify-center">

    <!-- Création des utilisateurs -->
    <div>
      <form @submit.prevent="submitForm" class="flex flex-col space-y-4">
        <label>Créer un utilisateur</label>
        <input v-model="name" type="text" class="border border-gray-300 bg-inherit" placeholder="nom" required>
        <input v-model="email" type="email" class="border border-gray-300 bg-inherit" placeholder="email" required>
        <input v-model="password" type="password" class="border border-gray-300 bg-inherit" placeholder="Mdp" required>
        <input type="submit" class="border border-sky-400 bg-inherit active:border-sky-500" value="Ajouter un utilisateur">
      </form>
    </div>

    <!-- Affichage des utilisateurs -->
    <ul>
      <li v-for="user in users" :key="user.id">
        <form @submit.prevent="delForm(user.id)">
          <p>ID: {{ user.id }}</p>
          <p>role: {{ user.role }}</p>
          <p>Name: {{ user.name }}</p>
          <p>Email: {{ user.email }}</p>
          <p>Password: {{ user.password }}</p>
          <input type="submit" class="border border-red-400 active:border-red-500 px-4" value="supprimer l'utilisateur">
        </form>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

// Champs du formulaire
const name = ref('');
// const role = ref('user');
const email = ref('');
const password = ref('');

// Liste des utilisateurs
const users = ref([]);

// Récupération des données depuis l'API au chargement
const fetchUsers = async () => {
  const { data, error } = await useFetch('/api/user', { method: 'GET' });

  if (!error.value) {
    users.value = data.value; // Charger les utilisateurs dans la liste
  } else {
    console.error('Error fetching users:', error.value);
  }
};
await fetchUsers(); // Charger la liste des utilisateurs

// Fonction pour ajouter un utilisateur avec cryptage du mot de passe
const submitForm = async () => {
  try {
    // Créez un nouveau mot de passe crypté

    const newUser = {
      name: name.value,
      role: role.value,
      email: email.value,
      password: password.value // Utilisation du mot de passe crypté
    };

    // Envoi du nouvel utilisateur à l'API
    const { data, error } = await useFetch('/api/user', {
      method: 'POST',
      body: newUser,
    });

    if (!error.value) {
      console.log('User added:', data.value);

      // Réinitialiser les champs du formulaire
      name.value = '';
      email.value = '';
      password.value = '';

      // Recharger la liste des utilisateurs
      await fetchUsers();
    } else {
      console.error('Error adding user:', error.value);
    }
  } catch (err) {
    console.error('Error adding user:', err);
  }
};

// Fonction pour supprimer un utilisateur
const delForm = async (userId: number) => {
  const { data, error } = await useFetch('/api/user', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' }, // Ajout important
    body: JSON.stringify({ id: userId }), // Sérialisation explicite
  });

  if (!error.value) {
    console.log('User deleted successfully:', data.value);
    await fetchUsers(); // Recharger la liste des utilisateurs
  } else {
    console.error('Error deleting user:', error.value);
  }
};
</script>
