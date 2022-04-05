<template>
  <div class="container-w">
      <h1>Je choisis ma formule</h1>
      <div class="grid">
            <div class="card-w">
                <h2>Free</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error commodi debitis deserunt dolorem maxime doloribus quos eligendi accusamus repellat quam atque facilis obcaecati praesentium nisi eaque ad, dolorum distinctio hic?
                </p>
                <router-link to="/success-create-account">
                    <button class="button-w">Je choisis cette option</button>
                </router-link>
            </div>
            <div class="card-w">
                <h2>Premium</h2>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error commodi debitis deserunt dolorem maxime doloribus quos eligendi accusamus repellat quam atque facilis obcaecati praesentium nisi eaque ad, dolorum distinctio hic?
                </p>
                <router-link to="/premium-subscriptions">
                    <button class="button-w">Je découvre les options</button>
                </router-link>
            </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

    h1 {
        font-size: 30px;
    }

    h2 {
        font-size: 20px;
    }

    .container-w {
        color: #1C535D;
        background-color: #C5C7DB;
    }
    
    .grid {
        display: grid;
        grid-gap: 0 3%;
        grid-template-columns: 40% 40%;
        margin: 3% 0;
        padding: 0 15%;
        justify-content: center;
    }

    .card-w {
        padding: 3%;
        background-color: #fff;
        border-radius: 15px;
    }

    .card-w p {
        margin: 3% 0;
    }

    .button-w {
        background-color: #1C535D;
        color: white;
    }
</style>