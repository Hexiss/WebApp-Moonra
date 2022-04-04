<template>
    <div>
        <div class="header">
            <h1>Mes favoris</h1>
            <SearchBar/>
        </div>
        <div class="buttons-menu">
            <ul>
                <li>Ajout récent</li>
                <li>Playlists</li>
                <li>Téléchargements</li>
            </ul>
        </div>

        <div class="container-w">
            
            <div class="item">
                <div>
                    <img src="@/assets/images/img-exemple-favorites.svg" alt="Exemple">
                </div>
                <div>
                    <h2>Titre d'un podcast</h2>
                    <p>Auteur</p>
                </div>
                <div>
                    <img src="@/assets/images/like.svg" alt="Like">
                    <img src="@/assets/images/params.svg" alt="Paramètres">
                </div>
            </div>

            <div class="item">
                <div>
                    <img src="@/assets/images/img-exemple-favorites-2.svg" alt="Exemple">
                </div>
                <div>
                    <h2>Titre d'un podcast</h2>
                    <p>Auteur</p>
                </div>
                <div>
                    <img src="@/assets/images/like.svg" alt="Like">
                    <img src="@/assets/images/params.svg" alt="Paramètres">
                </div>
            </div>

            <div class="item">
                <div>
                    <img src="@/assets/images/img-exemple-favorites.svg" alt="Exemple">
                </div>
                <div>
                    <h2>Titre d'une vidéo</h2>
                    <p>Auteur</p>
                </div>
                <div>
                    <img src="@/assets/images/like.svg" alt="Like">
                    <img src="@/assets/images/params.svg" alt="Paramètres">
                </div>
            </div>

            <div class="item">
                <div>
                    <img src="@/assets/images/img-exemple-favorites.svg" alt="Exemple">
                </div>
                <div>
                    <h2>Titre d'une vidéo</h2>
                    <p>Auteur</p>
                </div>
                <div>
                    <img src="@/assets/images/like.svg" alt="Like">
                    <img src="@/assets/images/params.svg" alt="Paramètres">
                </div>
            </div>

            <div class="item">
                <div>
                    <img src="@/assets/images/img-exemple-favorites.svg" alt="Exemple">
                </div>
                <div>
                    <h2>Titre d'une vidéo</h2>
                    <p>Auteur</p>
                </div>
                <div>
                    <img src="@/assets/images/like.svg" alt="Like">
                    <img src="@/assets/images/params.svg" alt="Paramètres">
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

    h2 {
        text-align: left;
        font-size: 20px;
        font-weight: bold;
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

    .container-w {
        height: 160vh;
        background-image: url('../assets/images/background-paon-home.svg');
        background-position: 100% 100%;
        background-size: 100%;
        background-repeat: no-repeat;
    }

    .item {
        display: grid;
        grid-template-columns: 20% 60% 20%;
        justify-content: center;
        align-items: center;
    }

    .item img {
        display: inline;
        margin-right: 10%;
    }

</style>