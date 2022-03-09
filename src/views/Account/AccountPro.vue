<template>
    <div>
        <div class="main-container grid grid-cols-5 gap-4">
            <router-link to="/calendar">
                <div class="main-container-item"> <span>Calendrier</span></div>
            </router-link>
            <router-link to="/calendar">
                <div class="main-container-item"> <span>RDV en attente</span> </div>
            </router-link>
            <router-link to="/calendar">
                <div class="main-container-item"> <span>Mes contenus</span> </div>
            </router-link>
            <router-link to="/calendar">
                <div class="main-container-item"> <span>Trésorerie</span> </div>
            </router-link>
            <router-link to="/calendar">
                <div class="main-container-item"> <span>Paramètres</span> </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped>

    .main-container {
        padding: 3% 10%;
        text-align: center;
        font-weight: bold;
        font-size: 2rem;
    }

        .main-container-item {
            height: 50vh;
            border: 1px solid black;
            display: flex;
            justify-content: center;
            align-content: center;
            flex-direction: column;
        }

</style>