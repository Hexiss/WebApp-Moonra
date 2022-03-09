<template>
  <input type="text" v-model="value" placeholder="Recherche..">
</template>

<script>
export default {
    data() {
        return {
            value: ''
        }
    }
}
</script>

<style scoped>
    input[type=text] {
        width: 25%;
        background-color: white;
        background-image: url('../assets/logos/search.svg');
        background-position: 1% 50%;
        padding: 0.5%;
        padding-left: 3%;
        background-repeat: no-repeat;
        border: none;
        box-shadow: 0 4px 8px 0 rgba(180, 180, 180, 0.2), 0 6px 20px 0 rgba(71, 71, 71, 0.19);
        border-radius: 5px;
    }

    input[type=text]:focus {
        outline: none;
    }
</style>