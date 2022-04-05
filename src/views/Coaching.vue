<template>
  <div class="contain">
      <div class="header">
          <div>
            <h1>Coaching</h1>
            <SearchBar/>
          </div>
      </div>
      <div class="content">
        <div class="item">
            <div>
                <img src="@/assets/images/therapist.svg" alt="">
            </div>
            <div>
                <h2>Jean Montboard</h2>
                <p>Coach de vie</p>
            </div>
            <div>
                <router-link to="/therapist">
                    <img src="@/assets/images/plus.svg" alt="">
                </router-link>
            </div>
        </div>
        <div class="item">
            <div>
                <img src="@/assets/images/coach-2.svg" alt="">
            </div>
            <div>
                <h2>Jean Montboard</h2>
                <p>Coach de vie</p>
            </div>
            <div>
                <router-link to="/therapist">
                    <img src="@/assets/images/plus.svg" alt="">
                </router-link>
            </div>
        </div>
        <div class="item">
            <div>
                <img src="@/assets/images/coach-3.svg" alt="">
            </div>
            <div>
                <h2>Jean Montboard</h2>
                <p>Coach de vie</p>
            </div>
            <div>
                <router-link to="/therapist">
                    <img src="@/assets/images/plus.svg" alt="">
                </router-link>
            </div>
        </div>
        <div class="item">
            <div>
                <img src="@/assets/images/therapist.svg" alt="">
            </div>
            <div>
                <h2>Jean Montboard</h2>
                <p>Coach de vie</p>
            </div>
            <div>
                <router-link to="/therapist">
                    <img src="@/assets/images/plus.svg" alt="">
                </router-link>            </div>
            </div>
        <div class="item">
            <div>
                <img src="@/assets/images/coach-2.svg" alt="">
            </div>
            <div>
                <h2>Jean Montboard</h2>
                <p>Coach de vie</p>
            </div>
            <div>
                <router-link to="/therapist">
                    <img src="@/assets/images/plus.svg" alt="">
                </router-link>
            </div>
        </div>
      </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'
export default {
    components: {
        SearchBar
    }
}
</script>

<style scoped>

    h1 {
        font-size: 40px;
        font-weight: bold;
        padding: 2% 0;
    }

    .header {
        text-align: center;
        background-image: url('../assets/images/coaching-background.svg');
        background-position: 100% 100%;
        background-size: 100%;
        background-repeat: no-repeat;
        height: 50vh;
    }

    h2 {
        text-align: left;
    }

    .item {
        display: grid;
        grid-template-columns: 20% 60% 20%;
        align-items: center;
    }

    .content {
        width: 50%;
        padding: 4%;
    }

</style>