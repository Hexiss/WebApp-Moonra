<template>
  <div>
      <div class="form">
        <h1>Création de compte</h1>
        <form @submit="onSubmit">
            <input type="text" name="cardNumber" v-model="form.cardNumber" placeholder="Numéro de carte">
            <input type="text" name="cardCW" v-model="form.cardCW" placeholder="CW">
            <input type="text" name="cardDate" v-model="form.cardDate" placeholder="Date">
            <label for="conditions">J'accepte la politique de confidentialité</label>
            <input type="checkbox" name="conditions">
            <button>S'inscrire</button>
        </form>

      </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        cardNumber: '',
        cardCW: '',
        cardDate:''
      }
    }
  }

}
</script>

<style>

  .form {
    text-align: center;
  }

  .form h1 {
    margin: 3% 0;
    font-weight: bold;
  }

  .form input {
    display: block;
    margin: 2% auto;
    padding: 0.5%;
    border: 1px solid black;
    width: 50%;
  }

</style>