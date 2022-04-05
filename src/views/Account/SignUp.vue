<template>
    <div class="container-w">
        <h1>Création de compte</h1>
        <div class="sub-container">
            <div class="grid">
                <input type="text" placeholder="Nom *" name="lastname">
                <input type="text" placeholder="Prénom *" name="firstname">
            </div>
            <input type="email" placeholder="Email *" name="email">
            <input type="text" placeholder="Mot de passe *"  name="password">
            <div class="div-checkbox">
                <input type="checkbox" name="stayLoggedIn">
                <label for="stayLoggedIn">Rester connecté</label>
            </div>
            <div class="div-checkbox">
                <input type="checkbox" name="CGU-CGV">
                <label for="CGU-CGV">En cochant cette case j’accepte la politique de confidentialité, les CGU et les CGV</label>
            </div>
            <div class="validation">
                <router-link to="/sign-up">J'ai déjà un compte. Se connecter</router-link>
                <router-link to="/choose-subscription">
                    <button class="button-w">Je m'inscris</button>
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
