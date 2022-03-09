<template>

  <div>
    <Navbar />
    <RouterView class="view" />
</header>

<footer>
<Footer />
</footer>

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
.view
{
  padding: 0 10%;
}
=======
<<<<<<< HEAD
  .view {
    padding: 5% 10%;
  }

=======
.view{
  height: 50vh;
}
>>>>>>> 60e6641ab5a9bfb4da6491d5a1e77be634111074
>>>>>>> d41f5f5f2a66d7f0be484be0a926a7389697ac1b
</style>
