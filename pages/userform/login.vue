<template>
  <div> // 1
    <div> // 2
      <h1>Login Page</h1>
      <div> // 3
        <form>
          <input>
          <input>
          <input>
        </form>
      </div> // ferme 3

      <ULink>Creer un compte</ULink>
    </div> // ferme 2
  </div> // ferme 1
</template>

<script setup lang="ts">
import { ref } from 'vue';

const name = ref('');
const email = ref('');
const password = ref('');

const users = ref([]);

const submitForm = async () => {
  try {
    const newUser = {
      name: name.value,
      role: role.value,
      email: email.value,
      password: password.value
    };

    const { data, error } = await useFetch('/api/user', {
      method: 'POST',
      body: newUser,
    });
  }
};
</script>