<template>
    <div class="container">
        <h1>Bienvenue sur Moonra</h1>
        <button class="sign-up button-x">Je m'inscris</button>
        <button class="sign-in button-x">Je me connecte</button>
    </div>
</template>

<style scoped>
    .container {
        height: calc(100vh - 120px);
        background-color: #1C535D;
        background-image: url('../../assets/images/pijeon.svg');
        background-position: 100% 100%;
        background-repeat: no-repeat;
    }
    h1 {
        color: white;
        font-size: 70px;
        margin-bottom: 5%;
    }

    .sign-up {
        background-color: #FF8E46;
    }

    .sign-in {
        border: 1px solid white;
        color: white;
    }
</style>
