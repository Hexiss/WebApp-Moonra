<template>
    <div class="container-w">
        <h1>Choix du créneau</h1>
        <div class="sub-container">
            <input class="up" type="text" placeholder="Lundi 12 mars">
            <div class="grid">
                <div>10:00</div>
                <div>11:00</div>
                <div>12:00</div>
                <div>13:00</div>
                <div>14:00</div>
                <div>10:00</div>
                <div>11:00</div>
                <div>12:00</div>
                <div>13:00</div>
                <div>14:00</div>
            </div>
            <input type="text" placeholder="Mardi 13 mars">
            <input type="text" placeholder="Mercredi 14 mars">
            <input type="text" placeholder="Jeudi 15 mars">

            <div class="validation">
                <router-link to="/sign-up">
                    <button class="button-w">Je valide mon créneau</button>
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
        grid-gap: 0 1%;
        grid-template-columns:  19% 19% 19% 19% 19%;
    }

    .grid > div {
        background-color: #fff;
        text-align: center;
        margin: 3% 0;
        border-radius: 15px;
        padding: 3% 0;
    }

    .validation {
        margin: 3% 0;
    }

    .up {
        background-image: url('../../assets/images/chevron-up.svg');
        background-position: 98% 50%;
        background-repeat: no-repeat;
    }


</style>
