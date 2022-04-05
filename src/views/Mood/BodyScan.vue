<template>
    <div class="contain">
        <h1>Aujourd'hui, je me sens</h1>
        <div class="grid">
            <div class="grid-img">
                <img src="@/assets/images/mood-yellow-1.svg" alt="">
                <img src="@/assets/images/mood-yellow-2.svg" alt="">
                <img src="@/assets/images/mood-yellow-3.svg" alt="">
                <img src="@/assets/images/mood-blue-1.svg" alt="">
                <img src="@/assets/images/mood-blue-2.svg" alt="">
                <img src="@/assets/images/mood-blue-3.svg" alt="">
                <img src="@/assets/images/mood-green-1.svg" alt="">
                <img src="@/assets/images/mood-green-2.svg" alt="">
                <img src="@/assets/images/mood-green-3.svg" alt="">
                <img src="@/assets/images/mood-pink-1.svg" alt="">
                <img src="@/assets/images/mood-pink-2.svg" alt="">
                <img src="@/assets/images/mood-pink-3.svg" alt="">
            </div>
            <div>
                <h2>Mon commentaire</h2>
                <textarea rows="15"/>
                <router-link to="/mood/journal">
                    <button class="button-w">J'enregistre</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>

  .button-w {
    background-color: #1C535D;
    color: white;
    margin: 0;
    padding: 3% 10%;
  }

    .contain {
        padding: 3% 10%;
    }

    textarea {
        width: 100%;
        border: 1px solid black;
        margin-top: 2%;
        border-radius: 5px;
    }

    h1, h2 {
        text-align: left;
        font-weight: bold;
    }

    h1 {
        font-size: 30px;
        margin-bottom: 3%;
    }

    h2 {
        font-size: 20px;
    }

    .grid {
        display: grid;
        grid-template-columns: 40% 55%;
        grid-gap: 0 5%
    }

    .grid-img {
        display: grid;
        grid-template-columns: 24% 24% 24% 24%;
        grid-gap: 0 1%;
    }

    .grid-img img {
        cursor: pointer;
    }

</style>