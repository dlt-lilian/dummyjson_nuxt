<template>
  <UHeader>
    <template #left>
      <div class="flex items-center space-x-4">
        <ULink
            to="/landing"
        >
          <img src="~/assets/img/nouveau_tampon.png"
               class="w-16"
          >
        </ULink>
        <Burger class="mr-4" />
      </div>
    </template>

    <template #right>
      <div class="flex items-center gap-4">
        <UInputMenu
            v-model="searchQuery"
            :options="productOptions"
            option-attribute="title"
            placeholder="Search..."
            class="w-96"
            @update:model-value="handleSearch"
        >
          <template #option="{ option }">
            <nuxt-link
                :to="`/products/${option.id}`"
                class="flex items-center gap-2 p-2"
            >
              <img
                  :src="option.images?.[0]"
                  :alt="option.title"
                  class="w-8 h-8 object-cover rounded"
              />
              <div>
                <p class="font-semibold">{{ option.title }}</p>
                <p class="text-sm text-gray-500">{{ option.category }}</p>
              </div>
            </nuxt-link>
          </template>
        </UInputMenu>

        <!-- Résultats de recherche -->
        <div v-if="searchQuery && filteredProducts.length > 0"
             class="search-results absolute mt-2 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700 max-h-96 overflow-y-auto">
          <div v-for="product in filteredProducts"
               :key="product.id"
               class="p-3 hover:bg-gray-100 dark:hover:bg-gray-700 cursor-pointer">
            <div class="flex items-center gap-3">
              <img
                  :src="product.images[0]"
                  :alt="product.title"
                  class="w-12 h-12 object-cover rounded"
              />
              <div>
                <p class="font-semibold">{{ product.title }}</p>
                <p class="text-sm text-gray-500">{{ product.category }}</p>
              </div>
            </div>
          </div>
        </div>

        <div v-else-if="searchQuery && filteredProducts.length === 0"
             class="absolute mt-2 p-3 w-64 bg-white dark:bg-gray-800 rounded-md shadow-lg border border-gray-200 dark:border-gray-700">
          <p class="text-gray-500">Aucun produit trouvé</p>
        </div>

        <!-- Navigation horizontale -->
        <UHorizontalNavigation :links="links">
          <template #default="{ link }">
            <span class="group-hover:text-primary relative">{{ link.label }}</span>
          </template>
        </UHorizontalNavigation>

        <!-- Mode couleur -->
        <ColorMode />
      </div>
    </template>
  </UHeader>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { useProductsStore } from '~/store/main.js'
import Burger from '~/components/navigation/links/burger.vue'
import ColorMode from '~/components/theme/ColorMode.vue'

const route = useRoute()
const productsStore = useProductsStore()
const products = ref([])
const selectedCategories = ref([])
const searchQuery = ref('')

onMounted(async () => {
  await productsStore.fetchProducts()
  products.value = productsStore.products

  const categoryParam = route.query.category
  if (categoryParam) {
    selectedCategories.value = [categoryParam]
  }
})

const filteredProducts = computed(() => {
  if (!searchQuery.value) return []

  let filtered = products.value

  if (selectedCategories.value.length > 0) {
    filtered = filtered.filter(product =>
        selectedCategories.value.includes(product.category)
    )
  }

  return filtered.filter(product =>
      product.title.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})

const productOptions = computed(() =>
    products.value.map(product => ({
      id: product.id,
      title: product.title,
      category: product.category,
      images: product.images
    }))
)

const handleSearch = (value: string) => {
  searchQuery.value = value
}

const links = [
  {
    label: 'User',
    icon: 'i-heroicons:user-circle',
    to: '/userform/login',
  },
  {
    label: 'Cart',
    icon: 'i-heroicons:shopping-bag',
    to: '/cart',
  }
]
</script>