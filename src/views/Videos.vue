<template>
<div>
    <navbar />
</div>
</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  name: 'videos',
  components: {
    Navbar
  }
}
</script>

<style scoped>
.searchbar {
  text-align: center;
}
</style>