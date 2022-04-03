<template>

  <div>
    <Navbar />
    <RouterView class="view" />
    <Footer />
  </div>

</template>


<script>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
  export default {
    components: {
      Navbar,
      Footer
    }
  }
</script>

<style>
@import "@/assets/base.css";

  /* .view {
      padding: 5% 10%;
      text-align: center;
  } */

  .container-w {
      height: calc(100vh - 120px);
      background-image: url('assets/images/pijeon.svg');
      background-position: 100% 100%;
      background-size: 15%;
      background-repeat: no-repeat;
  }

  .div-checkbox > * {
    display: inline;
    vertical-align: middle;
    margin: 0.5%;
  }


  .button-w {
      display: block;
      margin: 3% auto;
      padding: 1% 3%;
      border-radius: 50px;
      font-weight: bold;
  }

</style>
