<template>
    <div>

        <div>
            <div class="queue">
                <div class="header">
                    <h1>File d'attente</h1>
                </div>

                <div class="content">
                    
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

                </div>
            </div>
            <PodcastPlayer/>
            <div class="next">
                <div class="header">
                    <h1>Prochains titres</h1>
                </div>

                <div class="content">

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

        </div>
    </div>
</template>

<script>
import PodcastPlayer from '@/components/PodcastPlayer.vue'
export default {
    components: {
        PodcastPlayer
    }
}
</script>

<style scoped>

    h1 {
        text-align: left;
        font-size: 30px;
        font-weight: bold;
        margin: 2% 0;
    }

    .queue, .next {
        padding: 3% 20%;
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