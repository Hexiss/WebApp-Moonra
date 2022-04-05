<template>
  <div class="grid">
    <div class="item">
      <div>
          <img src="@/assets/images/woman-yoga.svg" alt="Exemple">
      </div>
      <div>
          <h2>Titre d'une vidéo</h2>
          <p>Auteur</p>
      </div>
      <div class="div-like">
          <img src="@/assets/images/like.svg" alt="Like">
      </div>
    </div>
    <div class="div-buttons">
      <img src="@/assets/images/player-buttons.svg" alt="">
    </div>
    <div class="div-params">
      <router-link to="/podcasts/list">
        <img src="@/assets/images/params.svg" alt="Paramètres">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

  h2 {
    text-align: left;
  }

  .grid {
      color: white;
      background-color: #6E74A5;
      display: grid;
      grid-template-columns: 20% 60% 20%;
      justify-content: center;
      align-items: center;
      padding: 2% 10%;
  }

  .grid img  {
    display: block;
    margin: 0 auto;
  }

  .item {
    display: grid;
    grid-gap: 0 2.5%;
    grid-template-columns: 20% 55% 20%;
    justify-content: center;
    align-items: center;
  }

  .item img {
      display: inline;
      margin-right: 10%;
  }

</style>