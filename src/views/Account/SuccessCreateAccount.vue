<template>
  <div class="container-w">
      <h1>Félicitation !</h1>
      <h2>Votre compte vien d'être créé !</h2>
      <router-link to="/">
        <button class="button-w">
            Je découvre
        </button>
      </router-link>
  </div>
</template>

<script>
export default {

}
</script>

<style>

    h1, h2 {
        color: white;
    }

    h1 {
        font-size: 60px;
    }

    h2 {
        font-size: 40px;
    }

    .container-w {
        background-color: #1C535D;
    }

    .button-w {
        background-color: #FFA14D;
    }

</style>