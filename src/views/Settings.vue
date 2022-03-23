<template>
  <div class="grid">
      <div class="grid-item">Compte</div>
      <div class="grid-item">Notification</div>
      <div class="grid-item">Langues</div>
      <div class="grid-item">Stockage</div>
      <div class="grid-item">Thèmes</div>
      <div class="grid-item">Aide</div>
      <div class="grid-item">A propos</div>
      <div class="grid-item">Deconnexion</div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

    .grid {
        display: grid;
        grid-template-columns: 20% 20% 20% 20%;
        grid-gap: 0 5%;
        justify-content: center;
        align-items: center;
    }

    .grid-item {
        border: 1px solid black; 
        height: 30vh;
        margin: 2% 0;
    }

</style>