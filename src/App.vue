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

<<<<<<< HEAD
  .view {
    padding: 5% 10%;
  }

=======
.view{
  height: 50vh;
}
>>>>>>> 60e6641ab5a9bfb4da6491d5a1e77be634111074
</style>
