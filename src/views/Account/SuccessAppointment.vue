<template>
  <div class="container-w">
      <h1>Félicitation !</h1>
      <h2>Un mail va vous être envoyé pour confirmer votre rendez-vous.</h2>
      <router-link to="/">
        <button class="button-w">
            Retourner à l'accueil
        </button>
      </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

    h1, h2, h3 {
        color: white;
    }

    h1 {
        font-size: 60px;
    }

    h2 {
        font-size: 40px;
    }

    h3 {
        font-size: 20px;
        margin: 3% 0;
    }

    .container-w {
        display: grid;
        align-items: center;
        background-color: #1C535D;
    }

    .button-w {
        background-color: #FFA14D;
    }

</style>