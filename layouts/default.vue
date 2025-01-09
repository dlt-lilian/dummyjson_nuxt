<script>

import {defineComponent} from "vue";
import NavBar from "~/components/navigation/NavBar.vue";
import Footer from "~/components/navigation/Footer.vue";

export default defineComponent({
  components: {Footer, NavBar}
})
</script>

<template>
  <div>
    <NavBar/>
  </div>
  <slot/>
  <div>
    <Footer/>
  </div>
</template>