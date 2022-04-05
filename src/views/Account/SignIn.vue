<template>
    <div class="container-w">
        <h1>Je me connecte</h1>
        <div class="sub-container">
            <input type="email" placeholder="Email *" name="email">
            <input type="text" placeholder="Mot de passe *"  name="password">
            <div class="div-checkbox">
                <input type="checkbox" name="stayLoggedIn">
                <label for="stayLoggedIn">Rester connecté</label>
            </div>
            <div class="validation">
                <router-link to="/sign-up">Je n'ai pas de compte. S'inscrire</router-link>
                <router-link to="/">
                    <button class="button-w">Je me connecte</button>
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
