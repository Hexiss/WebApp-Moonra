<template>
<div>
    <div>
        <SearchBar class="my-5"/>
    </div>

    <div class="grid grid-cols-2 gap-2">
    <div>
        <router-link to="#">
            <img class="largeur" src="@/assets/images/Videos.png" alt="">
        </router-link>
    </div>
    <div>
        <router-link to="#">
            <img class="largeur" src="@/assets/images/Podcasts.png" alt="">
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
import Button from "@/components/Button.vue"
export default {
    components:{
        SearchBar,
        Button
    }
}
</script>

<style>
    .largeur{
        width: 100%;
    }
</style>