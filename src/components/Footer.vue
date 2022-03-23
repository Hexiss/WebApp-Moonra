<template>
  <div class="pt-12">
    <footer id="footer" class="relative z-50 dark:bg-gray-900 pt-0 footercolor">
      <div class="border-t border-b border-gray-200 dark:border-gray-700 py-16">
        <div class="mx-auto container px-4 xl:px-12 2xl:px-4">
            <div class="titre">
              <h1 href="javascript:void(0)"> Envie de discuter ou nous rencontrer ?</h1>
            </div>
            <div class="info">
            <a style="padding-right:150px" href="javascript:void(0)">Mail: yolo@gmail.com</a>
            <a style="padding-right:150px" href="javascript:void(0)">Téléphone: 66 66 66 66 66</a>
            <a class="" href="javascript:void(0)">Nous contacter</a>
            </div>
          </div>
      </div>
      <div class="py-0 flex flex-col justify-center items-center">
        <a href="javascript:void(0)"> </a>
        <p class="copyright">@2022 Moonra by Holistic Popup - Mentions légales - Politique de confidentialité </p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: "index",
  data() {
    return {
      auto: true,
      light: false,
      dark: false,
    };
  },
  mounted() {},
  methods: {
    toggle(event) {
      if (event.target.value === "auto") {
        this.auto = true;
        this.light = false;
        this.dark = false;
      }
      if (event.target.value === "light") {
        this.auto = false;
        this.light = true;
        this.dark = false;
      }
      if (event.target.value === "dark") {
        this.auto = false;
        this.light = false;
        this.dark = true;
      }
    },
  },
};
</script>

<style scoped>
@import url("https://cdn.tuk.dev/dist/css/tailwind-v2.2.11.min.css");

.mt-2 {
  padding-bottom: 10px !important;
}

.footercolor {
  background-color: #6e74a5;
}

.titre {
  color: white;
  font-size: 30px;
  text-align: center;
}

.info {
    text-align: center;
      color: white;
      line-height: 80px;
}

.py-16 {
    padding-top: 1rem;
    padding-bottom: 0.5rem;
}

.copyright {
    color: white;
        padding-top: 0.5rem;
    padding-bottom: 0.5rem;
}
</style>
