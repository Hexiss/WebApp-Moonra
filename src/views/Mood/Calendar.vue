<template>
    <div class="contain">
        <h1>Calendrier</h1>
        <span>2022</span>
        <div class="grid">
            <div class="calendars">
                <img src="@/assets/images/mood-calendar-events-1.svg" alt="">
            </div>
            <div class="calendars">
                <img src="@/assets/images/mood-calendar-events-2.svg" alt="">
            </div>
            <div class="calendars params">
                <img src="@/assets/images/mood-calendar-events-3.svg" alt="">
            </div>
            <div class="calendars">
                <img src="@/assets/images/mood-calendar-avril.svg" alt="">
            </div>
            <div class="calendars">
                <img src="@/assets/images/mood-calendar-mai.svg" alt="">
            </div>
            <div class="calendars">
                <img src="@/assets/images/mood-calendar-juin.svg" alt="">
            </div>
            <div class="calendars">
                <img src="@/assets/images/mood-calendar-juillet.svg" alt="">
            </div>
            <div class="calendars">
                <img src="@/assets/images/mood-calendar-aout.svg" alt="">
            </div>
            <div class="calendars">
                <img src="@/assets/images/mood-calendar-sept.svg" alt="">
            </div>
            <div class="calendars">
                <img src="@/assets/images/mood-calendar-oct.svg" alt="">
            </div>
            <div class="calendars">
                <img src="@/assets/images/mood-calendar-nov.svg" alt="">
            </div>
            <div class="calendars">
                <img src="@/assets/images/mood-calendar-dec.svg" alt="">
            </div>
        </div>
    </div>
</template>

<style scoped>

    h1 {
        font-size: 50px;
        color: white;
        margin: 5% 0;
    }

    span {
        padding: 0.5% 1%;
        border-radius: 5px;
        margin-left: 10.5%;
        background-color: #fff;
    }

    .contain {
        background-color: #C5C7DB;
        padding: 2% 0
    }
    .grid {
        display: grid;
        grid-template-columns: 32% 32% 32%;
        grid-gap: 0 1%;
        padding: 0 10%;
        margin: 2% 0;
    }

    .calendars img {
        cursor: pointer;
    }
</style>