<template>
  <div>
      <div class="form">
        <h1>Création de compte</h1>
        <form @submit="onSubmit">
          <div class="card-1st-line">
            <input type="text" name="cardNumber" v-model="form.cardNumber" placeholder="Numéro de carte">
          </div>
            <div class="card-2nd-line">
              <input type="text" name="cardCW" v-model="form.cardCW" placeholder="CW">
              <input type="text" name="cardDate" v-model="form.cardDate" placeholder="Date">
            </div>

            <div class="div-conditions">
              <input type="checkbox" name="conditions">
              <label for="conditions">J'accepte la politique de confidentialité</label>
            </div>

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
  }

  .card-1st-line input {
    width: 50%;
  }

  .card-2nd-line {
    width: 50%;
    margin: 0 auto;
  }

  .card-2nd-line input {
    width: 98%;
  }

  .div-conditions label, .div-conditions input {
    display: inline
  }

  input[type="checkbox"] {
    width: 10%;
  }

  .card-2nd-line {
    display: grid;
    grid-template-columns: 50% 50%;
  }

</style>