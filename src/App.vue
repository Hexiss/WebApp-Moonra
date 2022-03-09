<template>

  <header>
    <Navbar />
    <RouterView class="view" />
</header>

<footer>
<Footer />
</footer>

</template>


<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";

</script>

<style>
@import "@/assets/base.css";

.view
{
  padding: 0 10%;
}
</style>
