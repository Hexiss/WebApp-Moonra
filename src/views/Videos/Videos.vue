<template>
    <div>
        <div class="header">
            <h1>Vidéos</h1>
            <SearchBar/>
        </div>
        <div class="buttons-menu">
            <ul>
                <router-link to='/category/yoga'>
                    <li>Yoga</li>
                </router-link>
                <router-link to="/category/conseils">
                    <li>Conseils bien être</li>
                </router-link>
                <router-link to="/category/meditation">
                    <li>Méditation</li>
                </router-link>
                <router-link to="/category/fitness">
                    <li>Fitness</li>
                </router-link>
                <router-link to="/category/sophrologie">
                    <li>Sophrologie</li>
                </router-link>
                <router-link to="/category/cartomancie">
                    <li>Cartomancie</li>
                </router-link>
                <router-link to="/category/dev">
                    <li>Développement personnel</li>
                </router-link>
            </ul>
        </div>

        <div class="container-w">
            <div class="bloc">
                <div class="bloc-header">
                    <div class="bloc-header-title">
                        <img src="@/assets/logos/lune.svg " alt="">
                        <h1 class="title">Ecouté récemment</h1>
                    </div>
                    <div class="bloc-header-button">
                        <button class="button-w">Voir tout</button>
                    </div>
                </div>
                <div class="image">
                    <router-link to="/videos/play" class="grid">
                        <li><img src="@/assets/images/video-miniature.svg " alt=""></li>
                        <li><img src="@/assets/images/video-miniature.svg " alt=""></li>
                        <li><img src="@/assets/images/video-miniature.svg " alt=""></li>
                        <li><img src="@/assets/images/video-miniature.svg " alt=""></li>
                    </router-link>
                </div>
            </div>

            <div class="bloc">
                <div class="bloc-header">
                    <div class="bloc-header-title">
                        <img src="@/assets/logos/lune.svg " alt="">
                        <h1 class="title">Recommandé pour toi</h1>
                    </div>
                    <div class="bloc-header-button">
                        <button class="button-w">Voir tout</button>
                    </div>
                </div>
                <div class="image">
                    <router-link to="/videos/play" class="grid">
                        <li><img src="@/assets/images/video-miniature.svg " alt=""></li>
                        <li><img src="@/assets/images/video-miniature.svg " alt=""></li>
                        <li><img src="@/assets/images/video-miniature.svg " alt=""></li>
                        <li><img src="@/assets/images/video-miniature.svg " alt=""></li>
                    </router-link>
                </div>
            </div>

            <div class="bloc">
                <div class="bloc-header">
                    <div class="bloc-header-title">
                        <img src="@/assets/logos/lune.svg " alt="">
                        <h1 class="title">Nouveautés</h1>
                    </div>
                    <div class="bloc-header-button">
                        <button class="button-w">Voir tout</button>
                    </div>
                </div>
                <div class="image">
                    <router-link to="/videos/play" class="grid">
                        <li><img src="@/assets/images/video-miniature.svg " alt=""></li>
                        <li><img src="@/assets/images/video-miniature.svg " alt=""></li>
                        <li><img src="@/assets/images/video-miniature.svg " alt=""></li>
                        <li><img src="@/assets/images/video-miniature.svg " alt=""></li>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
export default {
    components: {
        SearchBar
    }
}
</script>

<style scoped>

  .button-w {
    background-color: #1C535D;
    color: white;
    margin: 0;
    padding: 3% 10%;
  }
  
  .title {
    top: 3px;
    font-size: 25px;
    width: 110px;
  }

  li {
      display: inline-block;
  }

    ul {
        text-align: center;
    }

    h1 {
        font-size: 30px;
        margin-bottom: 1%;
    }

    .header {
        margin: 3% 0;
        text-align: center;
    }

    .buttons-menu > ul li {
        display: inline;
        border: 1px solid whitesmoke;
        border-radius: 5px;
        margin-right: 1%;
        padding: 0.25% 2%;
        color: #1C535D;
    }

    .bloc {
        padding: 3% 10%;
    }

    .bloc-header {
        display: flex;
        justify-content: space-between;
        margin: 3% 0;
    }

    .bloc-header-title > * {
        display: inline;
        vertical-align: middle;
    }

    .bloc-header-button {
        width: 10%;
    }

    .container-w {
        height: 230vh;
        background-image: url('../../assets/images/background-paon-videos.svg');
        background-position: 100% 100%;
        background-size: 100%;
        background-repeat: no-repeat;
    }

    .grid {
        display: grid;
        grid-template-columns: 24% 24% 24% 24%;
        grid-gap: 0 1%;
    }

</style>