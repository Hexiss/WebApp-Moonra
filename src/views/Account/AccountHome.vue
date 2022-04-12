<template>
    <div class="contain">
        <div>
            <h1>Bienvenue sur Moonra</h1>
            <router-link to="/sign-up">
                <button class="sign-up button-w">Je m'inscris</button>
            </router-link>
            <router-link to="/sign-in">
                <button class="sign-in button-w">Je me connecte</button>
            </router-link>
        </div>

    </div>
</template>

<style scoped>
    .contain {
        background-color: #1C535D;
        background-image: url('../../assets/images/paon.svg');
        background-position: 100% 110%;
        background-repeat: no-repeat;
        display: grid;
        align-items: center;
        justify-content: center;
        height: calc(100vh - 150px);
    }

    h1 {
        color: white;
        font-size: 70px;
        margin-bottom: 5%;
        text-align: center;
    }

    .sign-up {
        background-color: #FF8E46;
    }

    .sign-in {
        border: 1px solid white;
        color: white;
    }
</style>
