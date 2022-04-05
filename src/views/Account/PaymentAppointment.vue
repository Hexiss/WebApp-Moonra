<template>
    <div class="container-w">
        <h1>Paiement</h1>
        <div class="sub-container">
            <label for="name">Nom sur la carte*</label>
            <input type="text" name="name">
            <label for="number">Numéro de carte*</label>
            <input type="text" name="number">
            <div class="grid">
                <div>
                    <label for="date">Date*</label>
                    <input type="text" placeholder="MM/AA" name="date">
                </div>
                <div>
                    <label for="CVV">CVV*</label>
                    <input type="text"  name="CVV">
                </div>

            </div>
            <div class="div-checkbox">
                <input type="checkbox" name="saveInfos">
                <label for="saveInfos">Enregistrer mes informations pour la prise de rendez-vous</label>
            </div>
            <div class="validation">
                <router-link to="/success-appointment">
                    <button class="button-w">Je valide mon abonnement</button>
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

    label {
        font-weight: bold;
    }

    input[type="text"] {
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
