<template>
  <div class="mx-64 justify-between">
    <div class="flex content-center py-4 space-x-4">
      <ULink
      to="/landing.vue"
      >
        <img src="~/assets/img/nouveau_tampon.png" class="w-16">
      </ULink>

      <UInputMenu
          placeholder="Search..."
          :option="productSearch"
          option-attribute="name"

      />
    </div>
    <div></div>
  </div>
</template>

<script>
const productSearch = [{
  id: 1,
  name: 'Wade Cooper'
}, {
  id: 2,
  name: 'Arlene Mccoy'
}, {
  id: 3,
  name: 'Devon Webb'
}, {
  id: 4,
  name: 'Tom Cook'
}]
</script>