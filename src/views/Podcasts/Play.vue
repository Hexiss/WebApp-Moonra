<template>
  <div>
      <div class="main-container">
        <div class="img-player-container">
            <img src="@/assets/images/woman-yoga.svg" alt="">
        </div>
        <div class="loading-bar">
            <img src="@/assets/images/loading-bar.svg" alt="">
        </div>
      </div>
      <PodcastPlayer/>
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

<style>

    .loading-bar img {
        display: block;
        margin: 0 auto;
        width: 10%;
    }

    .img-player-container {
        padding: 3% 0;
    }

    .img-player-container img {
        display: block;
        margin: 0 auto;
        width: 25%;
    }

    .main-container {
        background-color: #6E74A5;
        display: grid;
        align-items: center;
        height: 68vh;
    }

</style>