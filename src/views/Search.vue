<template>
<div>
    <div>
        <SearchBar />
    </div>

    <div class="grid grid-cols-2">
    <div>
        <router-link to="#">
            <img class="" src="@/assets/images/Videos.png" alt="">
        </router-link>
    </div>
    <div>
        <router-link to="#">
            <img class="" src="@/assets/images/Podcasts.png" alt="">
        </router-link>
    </div>
    </div>

    <div class="grid grid-cols-4 gap-2">
    <div>
        <router-link to="#">
            <img class="mx-auto w-auto" src="@/assets/images/Yoga.png" alt="">
        </router-link>
    </div>
    <div>
        <router-link to="#">
            <img class="mx-auto w-auto" src="@/assets/images/Fitness.png" alt="">
        </router-link>
    </div>
    <div>
        <router-link to="#">
            <img class="mx-auto w-auto" src="@/assets/images/Meditation.png" alt="">
        </router-link>
    </div>
    <div>
        <router-link to="#">
            <img class="mx-auto w-auto" src="@/assets/images/Sophrologie.png" alt="">
        </router-link>
    </div>
    <div>
        <router-link to="#">
            <img class="mx-auto w-auto" src="@/assets/images/Yoga.png" alt="">
        </router-link>
    </div>
    <div>
        <router-link to="#">
            <img class="mx-auto w-auto" src="@/assets/images/Fitness.png" alt="">
        </router-link>
    </div>
    <div>
        <router-link to="#">
            <img class="mx-auto w-auto" src="@/assets/images/Meditation.png" alt="">
        </router-link>
    </div>
    <div>
        <router-link to="#">
            <img class="mx-auto w-auto" src="@/assets/images/Sophrologie.png" alt="">
        </router-link>
    </div>
    
    </div>
</div>


</template>

<script>
import SearchBar from "@/components/SearchBar.vue"
export default {
    components:{
        SearchBar
    }
}
</script>

<style>

</style>