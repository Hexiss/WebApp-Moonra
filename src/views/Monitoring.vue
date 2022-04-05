<template>
    <div>

        <div class="container-w">
                <router-link to="/mood/journal">
                <div class="item mood">
                </div>
                </router-link> 

                <router-link to="/mood/calendar">
                <div class="item calendar">
                </div>
                </router-link>

                <router-link to="/mood/trainings">
                <div class="item training">
                </div>
                </router-link>
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
        font-size: 30px;
        margin-bottom: 1%;
    }

    .container-w {
        height: 130vh;
        background-image: url('../assets/images/background-paon-home.svg');
        background-position: 100% 100%;
        background-size: 100%;
        background-repeat: no-repeat;
        display: grid;
        grid-template-columns: 32% 32% 32%;
        grid-gap: 0 1%;
        justify-content: center;
    }

     .mood {
        background-image: url('../assets/images/background-card-mood-monitoring.svg');
        background-size: 100%;
        background-repeat: no-repeat;
    }

     .calendar {
        background-image: url('../assets/images/background-card-calendar-monitoring.svg');
        background-size: 100%;
        background-repeat: no-repeat;
    }

    .training {
        background-image: url('../assets/images/background-card-training-monitoring.svg');
        background-size: 100%;
        background-repeat: no-repeat;
    }

    .item {
        height: 100%;
    }

</style>