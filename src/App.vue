<template>

  <div>
    <Navbar />
    <RouterView class="view" />
    <Footer />
  </div>

</template>


<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
  export default {
    components: {
      Navbar,
      Footer
    }
  }
</script>

<style>
@import "@/assets/base.css";

.view {
    padding: 5% 10%;
    min-height: 50vh;
    text-align: center;
  }

</style>
