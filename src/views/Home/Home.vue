<template>
  <div>
    <div class="container-start-page">
      <div class="flex">
        <div>
        <img src="@/assets/logos/lune.svg " alt="">
        </div>
        <div>
        <h1 class="title">Podcasts</h1>
        </div>
        <div class="w-5/6">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full button">Voir tout</button>
        </div>
      </div>

      <div class="image">
        <ul>
          <li>
            <router-link to ="/podcasts/play">
              <img src="@/assets/logos/image.svg " alt="">
            </router-link>
          </li>
          <li>
            <router-link to ="/podcasts/play">
              <img src="@/assets/logos/image.svg " alt="">
            </router-link>
          </li>
          <li>
            <router-link to ="/podcasts/play">
              <img src="@/assets/logos/image.svg " alt="">
            </router-link>
            </li>
          <li>
            <router-link to ="/podcasts/play">
              <img src="@/assets/logos/image.svg " alt="">
            </router-link>
          </li>
          </ul>
      </div>

      <div class="flex">
        <div>
          <img src="@/assets/logos/lune.svg " alt="">
        </div>
        <div>
          <h1 class="title" style="right:13px">Vidéos</h1>
        </div>
        <div class="w-5/6">
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full button">Voir tout</button>
        </div>
      </div>

      <div class="image">
        <ul>
          <li>
            <router-link to="/videos/play">
              <img src="@/assets/logos/image.svg " alt="">
            </router-link>
          </li>
          <li>
            <router-link to="/videos/play">
              <img src="@/assets/logos/image.svg " alt="">
            </router-link>
          </li>
          <li>
            <router-link to="/videos/play">
              <img src="@/assets/logos/image.svg " alt="">
            </router-link>
          </li>
          <li>
            <router-link to="/videos/play">
              <img src="@/assets/logos/image.svg " alt="">
            </router-link>
          </li>

        </ul>
      </div>

      <div class="flex">
        <div>
        <img src="@/assets/logos/lune.svg " alt="">
        </div>
        <div>
        <h1 class="title" style="left:3px">Thérapeutes</h1>
        </div>
        <div class="w-5/6">
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full button">Voir tout</button>
        </div>
      </div>

      <div class="image">
        <ul>
          <router-link to="/therapist">
            <li><img src="@/assets/logos/image.svg " alt=""></li>
            <li><img src="@/assets/logos/image.svg " alt=""></li>
            <li><img src="@/assets/logos/image.svg " alt=""></li>
            <li><img src="@/assets/logos/image.svg " alt=""></li>
          </router-link>
        </ul>
      </div>

      <div>
        <img src="@/assets/logos/app.svg " alt="">
      </div>
    </div>

    <div class="container-end-page">
      <div class="grid">
        <div class="text">
          <h2>Moonra par Hollistic Popup</h2>
          <h3>Qu'est ce que Hollistic Popup ?</h3>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel beatae esse facilis deserunt. Sed dolor debitis ratione sit possimus recusandae excepturi minima? Necessitatibus voluptatem, voluptates voluptatibus nesciunt suscipit totam molestias!</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam quia nostrum ipsum dicta eligendi eius explicabo hic at, mollitia facilis quod quae delectus quos unde esse cupiditate voluptates, voluptatum dolorem!</p>
          <button class="button-w">Accèder au site d'Hollistic Popup</button>
        </div>
        <div class="img">
          <img src="@/assets/images/woman-yoga.svg" alt="Woman doing yoga">
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped>
  .button {
    left: 600px;
    background-color: #1C535D;
  }
  .title {
    top: 3px;
    font-size: 25px;
    width: 110px;
  }

  li {
      display: inline-block;
  }

  .container-start-page {
    padding: 5% 10%;
    text-align: center;
  }

  .container-end-page {
    background-image: url('../../assets/images/background-paon-home.svg');
    background-position: 100% 100%;
    background-size: 100%;
    background-repeat: no-repeat;
    height: 130vh;
  }

  .grid {
    padding: 0 10%;
    grid-template-columns: 57% 40%;
    grid-gap: 0 3%;
  }

  .grid > div {
    border-radius: 20px;
  }

  .grid .text {
    padding: 3%;
    background-color: #6E74A5;
    color: white;
  }
  .text h2 {
    font-size: 50px;
    margin: 3% 0;
  }

  .text  h3 {
    font-size: 30px;
    margin: 3% 0;
  }

  .button-w {
    margin: 3% 0;
    background: #FFA14D;
  }
</style>