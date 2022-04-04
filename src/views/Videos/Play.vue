<template>
    <div class="container">
        <div class="player">
            <img class="img-video" src="@/assets/images/video-player.svg" alt="Video player">
            <div class="player-buttons">
                <img src="@/assets/images/player-buttons.svg" alt="">
            </div>
        </div>
        <div class="description">
            <div class="header">
                <div class="avatar">
                    <img src="@/assets/images/video-player-avatar.svg" alt="">
                </div>
                <div>
                    <h3>Titre d'une vidéo</h3>
                    <p>Auteur</p>
                </div>
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti, excepturi tenetur voluptatem tempora voluptate ducimus sed dicta ad facilis earum, ea quasi quae ullam saepe maiores quisquam. Sunt, cupiditate.</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim placeat earum possimus consequatur autem! Aliquid modi eos vel deleniti ipsam aut praesentium quidem, vitae, reprehenderit magnam atque nobis! Ipsam, corrupti.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis, aperiam. Voluptatum soluta tenetur sequi consectetur quos aut laudantium quam error minima quaerat quibusdam, animi, rerum, doloribus quisquam. Sequi, odit ratione?</p>
        </div>
        <div class="suggestion">
            <h2>Pour vous</h2>
            <div class="grid">
                <div>
                    <img src="@/assets/images/video-player-exemple-1.svg" alt="">
                </div>
                <div>
                    <img src="@/assets/images/video-player-exemple-2.svg" alt="">
                </div>
                <div>
                    <img src="@/assets/images/video-player-exemple-3.svg" alt="">
                </div>
                <div>
                    <img src="@/assets/images/video-player-exemple-4.svg" alt="">
                </div>
            </div>
        </div>
    </div>    
</template>

<style scoped>

    .grid {
        display: grid;
        grid-template-columns: 24% 24% 24% 24%;
        grid-gap: 0 1%;
    }

    .grid img {
        border-radius: 10px;
    }

    .player {
        margin-top: 3%;
    }

    .player-buttons {
        background-color: #61CFCC;
    }

        .player img {
            display: block;
            margin: 0 auto;
        }

        .player .img-video {
            width: 70%;
        }

        .player-buttons {
            width: 70%;
            display: block;
            margin: 0 auto;
            border-radius: 10px;
        }

    .description {
        margin: 5% 15%;
    }

    .header {
        display: grid;
        grid-template-columns: 15% 85%;
        align-items: center;
        margin: 3% 0;
    }

    h3, h2 {
        text-align: left;
    }

    h2 {
        font-size: 30px;
        font-weight: bold;
        margin: 1% 0;
    }

    .suggestion {
        margin: 5% 0;
    }



</style>