<template>

  <header>
    <div class="wrapper">
      <nav>
        <Navbar />
      </nav>
    </div>
  </header>


    <RouterView />

</template>


<script setup>
import { RouterLink, RouterView } from "vue-router";
import Navbar from "@/components/Navbar.vue";
</script>

<style>
@import "@/assets/base.css";
</style>
