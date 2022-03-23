<template>
  <div class="grid">
      <div class="settings-link">
          <router-link to="/">
            <div class="setting-link-item">Informations</div>
          </router-link>
          <router-link to="/">
            <div class="setting-link-item">Favoris</div>
          </router-link>
          <router-link to="/">
            <div class="setting-link-item">Historique de recherches</div>
          </router-link>
          <router-link to="/">
            <div class="setting-link-item">Utilisation des données cellulaire</div>
          </router-link>
          <router-link to="/">
            <div class="setting-link-item">Restrictions</div>
          </router-link>
          <router-link to="/">
            <div class="setting-link-item">Changer de compte</div>
          </router-link>
          <router-link to="/">
            <div class="setting-link-item">Gérer mon abonnement</div>
          </router-link>
      </div>
      <div>
          <div class="avatar"></div>
          <div class="informations">
              <div class="name">
                <span>Nom :</span>
                <span>Nom de famille</span>
                <img src="@/assets/logos/edit.svg" alt="">
              </div>
              <div class="firstname">
                <span>Prénom: </span>
                <span>Prénom</span>
                <img src="@/assets/logos/edit.svg" alt="">
              </div>
              <div class="number">
                <span>Numéro de téléhpne</span>
                <span>06 30 32 32 01</span>
                <img src="@/assets/logos/edit.svg" alt="">
              </div>
              <div class="email">
                <span>Adresse e-mail</span>
                <span>contact@gmail.Com</span>
                <img src="@/assets/logos/edit.svg" alt="">
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

    .grid {
        text-align: left;
        display: grid;
        grid-template-columns: 20% 70%;
        grid-gap: 10%;
    }

    .setting-link-item {
        border-bottom: 1px solid black;
    }

    .avatar {
        border: 1px solid black;
        border-radius: 50%;
        width: 10%;
        height: 20%;
        margin: 5% 0;
    }

    .informations div {
        margin: 3% 0;
    }

    .informations span {
        display: block;
    }

    .informations img {
        cursor: pointer;
    }

</style>