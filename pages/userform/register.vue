<template>
  <div class="mx-64 flex justify-center">
    <div class="space-y-8 border border-gray-300 rounded-md p-4 my-4">
      <h1>Register Page</h1>
      <div>
        <form @submit.prevent="submitForm" class="flex flex-col space-y-4">
          <input v-model="name" type="text" class="border border-gray-300 bg-inherit" placeholder="Nom" required>
          <input v-model="email" type="email" class="border border-gray-300 bg-inherit" placeholder="email" required>
          <input v-model="password" type="password" class="border border-gray-300 bg-inherit" placeholder="Mdp" required>
          <input type="submit" class="border border-orange-400 bg-inherit active:border-orange-500" value="Creer un compte">
        </form>
      </div>

      <ULink
          to="login"
          active-class="text-primary"
          inactive-class="text-orange-500"
      >
        J'ai deja un compte
      </ULink></div>
  </div>
</template>
<script setup lang="ts">
</script>