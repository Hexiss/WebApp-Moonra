<template>
    <div class="container-w">
        <h1>Mon compte professionnel</h1>
        <div class="sub-container">
            <div class="grid">
                <input type="text" placeholder="Nom *" name="lastname">
                <input type="text" placeholder="Prenom *"  name="firstname">
            </div>
            <input type="email" name="email" placeholder="Email *">
            <input type="text" name="phonenumber" placeholder="Numéro de téléphone *">
            <input type="text" name="siret  " placeholder="SIRET *">

            <div class="div-checkbox">
                <input type="checkbox" name="saveInfos">
                <label for="saveInfos">En cochant cette case j'accepte la politique de confidentialité, les CGU et CGV</label>
            </div>
            <div class="validation">
                <router-link to="/payment">
                    <button class="button-w">Je m'inscris !</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>

    .container-w {
        color: #1C535D;
        background-color: #61CFCC;
    }

    button {
        color: white;
        background-color: #1C535D;
        margin: 1% auto;
    }

    .sub-container {
        width: 70%;
        display: block;
        margin: 0 auto;
        text-align: left;
    }

    input[type="text"], input[type="email"] {
        display: block;
        border-radius: 50px;
        height: 3rem;
        padding-left: 3%;
        width: 100%;
        margin: 2% 0;
    }

    h1 {
        font-size: 30px;
        margin-bottom: 5%;
    }

    .grid {
        display: grid;
        grid-gap: 0 5%;
        grid-template-columns:  47.5% 47.5%;
    }

    .div-checkbox {
        text-align: left;
    }

    .validation {
        margin: 3% 0;
    }


</style>
