<template>
    <div class="contain">
        <div class="header">
            <img src="@/assets/images/therapist.svg" alt="Therapeute">
            <h2>Julien Maleau</h2>
            <span>Thérapeute</span>
            <router-link to="make-appointment">
                <button class="button-w appointment">Prendre rendez-vous</button>
            </router-link>
        </div>
        <div class="bloc">
            <div class="bloc-header">
                <div class="bloc-header-title">
                    <img src="@/assets/logos/lune.svg " alt="">
                    <h1 class="title">Vidéos</h1>
                </div>
                <div class="bloc-header-button">
                    <button class="button-w">Voir tout</button>
                </div>
            </div>
            <div class="image">
                <ul>
                <router-link to="/videos/play">
                    <li><img src="@/assets/logos/image.svg " alt=""></li>
                    <li><img src="@/assets/logos/image.svg " alt=""></li>
                    <li><img src="@/assets/logos/image.svg " alt=""></li>
                </router-link>
                </ul>
            </div>
        </div>
        <div class="bloc">
            <div class="bloc-header">
                <div class="bloc-header-title">
                    <img src="@/assets/logos/lune.svg " alt="">
                    <h1 class="title">Podcasts</h1>
                </div>
                <div class="bloc-header-button">
                    <button class="button-w">Voir tout</button>
                </div>
            </div>
            <div class="image">
                <ul>
                <router-link to="/podcasts/play">
                    <li><img src="@/assets/logos/image.svg " alt=""></li>
                    <li><img src="@/assets/logos/image.svg " alt=""></li>
                    <li><img src="@/assets/logos/image.svg " alt=""></li>
                </router-link>
                </ul>
            </div>
        </div>
    </div>
</template>

<style scoped>

    h1 {
        font-size: 30px;
        margin-bottom: 1%;
    }

  li {
      display: inline-block;
  }

    ul {
        text-align: center;
    }
    .header {
        text-align: center;
        margin: 3% 0;
    }
    .header img {
        display: block;
        margin: 0 auto;
    }

    h2 {
        font-size: 20px;
        font-weight: bold;
    }

    .appointment {
        background-color: #1C535D;
        color: white;
        margin: 1% auto;
        padding: 1% 2%;
    }

    .bloc {
        padding: 3% 10%;
    }

    .bloc-header {
        display: flex;
        justify-content: space-between;
    }

    .bloc-header-title > * {
        display: inline;
        vertical-align: middle;
    }

    .bloc-header-button {
        width: 10%;
    }
</style>