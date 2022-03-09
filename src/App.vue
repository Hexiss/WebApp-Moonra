<template>

  <header>
    <Navbar />
    <RouterView />
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
</style>
