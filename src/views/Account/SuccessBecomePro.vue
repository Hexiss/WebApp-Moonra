<template>
  <div class="container-w">
      <h1>Félicitation !</h1>
      <h2>Votre compte sera bientôt pro !</h2>
      <h3>Vous allez recevoir un email prochainement pour valider votre inscription</h3>
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
        background-color: #1C535D;
    }

    .button-w {
        background-color: #FFA14D;
    }

</style>