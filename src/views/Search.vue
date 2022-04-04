<template>
    <div>
        <div class="header">
            <h1>Meditation</h1>
            <SearchBar/>
        </div>
        <div class="format">
            <div class="videos">
                <h2>Vidéos</h2>
                <img src="@/assets/images/paon-videos.svg" alt="Paon">
            </div>
            <div class="podcasts">
                <h2>Podcasts</h2>
                <img src="@/assets/images/paon-videos.svg" alt="Paon">
            </div>
        </div>
        <div class="section-title">
            <img src="@/assets/logos/lune.svg " alt="">
            <h3>Thèmes pour vous</h3>
        </div>
        <div class="category">
            <div class="grid">
                <div>
                    <h4>Yoga</h4>
                    <img src="@/assets/images/paon-category-yoga.svg" alt="Paon">
                </div>
                <div>
                    <h4>Fitness</h4>
                    <img src="@/assets/images/paon-category-fitness.svg" alt="Paon">
                </div>
                <div>
                    <h4>Conseils bien-être</h4>
                    <img src="@/assets/images/paon-category-conseils.svg" alt="Paon">
                </div>
                <div>
                    <h4>Sophrologie</h4>
                    <img src="@/assets/images/paon-category-sophrologie.svg" alt="Paon">
                </div>
                <div>
                    <h4>Cartomancie</h4>
                    <img src="@/assets/images/paon-category-cartomancie.svg" alt="Paon">
                </div>
                <div>
                    <h4>Développement personnel</h4>
                    <img src="@/assets/images/paon-category-dev.svg" alt="Paon">
                </div>
                <div>
                    <h4>Méditation</h4>
                    <img src="@/assets/images/paon-category-meditation.svg" alt="Paon">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import SearchBar from "@/components/SearchBar.vue"
export default {
    components:{
        SearchBar
    }
}
</script>

<style scoped>

    h1 {
        font-size: 30px;
        margin-bottom: 1%;
    }

    h2 {
        font-size: 50px;
    }

    .header {
        margin: 3% 0;
        text-align: center;
    }

    .format {
        display: grid;
        grid-gap: 0 3%;
        grid-template-columns: 37.5% 37.5%;
        padding: 3% 10%;
        justify-content: center;
        text-align: center;
    }

        .format > div {
            border-radius: 20px;
        }

        .format .videos {
            background-color: #FFA14D;
        }

        .format .podcasts {
            background:#FB6D8F;
        }

        .format img {
            display: block;
            margin: 0 auto;
            width: 50%;
        }

    .section-title {
        margin-left: 10%;
    }

    .section-title > * {
        vertical-align: middle;
        display: inline;
    }

    .section-title h3 {
        font-size: 30px;
    }

    .category h4 {
        font-size: 20px;
        color: white;
        font-weight: bold;
        margin-bottom: 5%;
    }

    .category {
        background-image: url('../assets/images/background-paon-home.svg');
        background-position: 100% 100%;
        background-size: 100%;
        background-repeat: no-repeat;
        height: 150vh;
    }

    .category .grid {
        padding: 2% 10%;
        display: grid;
        grid-gap: 5% 1%;
        grid-template-columns: 24% 24% 24% 24%;
        justify-content: center;
    }

        .category .grid > div {
            padding: 3% 0;
            text-align: center;
            background-color: #1C535D;
        }

            .category .grid > div img {
                display: block;
                margin: 0 auto;
            }

</style>