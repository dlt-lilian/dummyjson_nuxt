<script>

import {defineComponent} from "vue";
import NavBar from "~/components/navigation/NavBar.vue";
import Footer from "~/components/navigation/Footer.vue";
import NavBar_v2 from "~/components/navigation/NavBar_v2.vue";

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