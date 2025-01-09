<template>
  <UHeader>

    <template #right>
      <UInput color="primary" variant="outline" placeholder="Search..." />
      <UHorizontalNavigation :links="links" class="w-auto">
        <template #default="{ link }">
          <span class="group-hover:text-primary relative">{{ link.label }}</span>
        </template>
      </UHorizontalNavigation>
      <ColorMode/>
    </template>

    <template #left>
      <burger/>
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import Burger from "~/components/navigation/links/burger.vue";
import ColorMode from "~/components/theme/ColorMode.vue";

const links = [{
  label: 'User',
  icon: 'i-heroicons:user-circle',
  to: 'admin/UserForm',
}]
</script>