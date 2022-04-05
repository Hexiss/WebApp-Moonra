<template>
  <div class="container-w">
      <h1>Formules Premium</h1>
      <div class="grid">
            <div class="card-w">
                <div class="card-header-w">
                    <h2>Classic</h2>
                    <span>5€/mois</span>
                </div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error commodi debitis deserunt dolorem maxime doloribus quos eligendi accusamus repellat quam atque facilis obcaecati praesentium nisi eaque ad, dolorum distinctio hic?
                </p>
                <router-link to="/account/account-pro">
                    <button class="button-w">Je choisis cette option</button>
                </router-link>
            </div>
            <div class="card-w">
                <div class="card-header-w">
                    <h2>Silver</h2>
                    <span>10€/mois</span>
                </div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error commodi debitis deserunt dolorem maxime doloribus quos eligendi accusamus repellat quam atque facilis obcaecati praesentium nisi eaque ad, dolorum distinctio hic?
                </p>
                <router-link to="/account/account-pro">
                    <button class="button-w">Je choisis cette option</button>
                </router-link>            </div>
            <div class="card-w">
                <div class="card-header-w">
                    <h2>Gold</h2>
                    <span>15€/mois</span>
                </div>
                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error commodi debitis deserunt dolorem maxime doloribus quos eligendi accusamus repellat quam atque facilis obcaecati praesentium nisi eaque ad, dolorum distinctio hic?
                </p>
                <router-link to="/account/account-pro">
                    <button class="button-w">Je choisis cette option</button>
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
        grid-template-columns: 30% 30% 30%;
        margin: 3% 0;
        padding: 0 15%;
        justify-content: center;
    }

    .card-w {
        padding: 5%;
        background-color: #fff;
        border-radius: 15px;
        text-align: left;
    }

    .card-w p {
        margin: 3% 0;
    }

    .card-header-w {
        display: flex;
        justify-content: space-between;
    }

    .button-w {
        background-color: #1C535D;
        color: white;
        margin: 0;
    }
</style>