<template>
    <div class="contain">
        <h1>Mood journal</h1>
        <span>2022</span>
        <div class="grid">
            <div class="calendars">
                <router-link to="/mood/bodyscan">
                    <img src="@/assets/images/mood-calendar-jan.svg" alt="">
                </router-link>
            </div>
            <div class="calendars">
                <router-link to="/mood/bodyscan">
                <img src="@/assets/images/mood-calendar-fev.svg" alt="">
                </router-link>
            </div>
            <div class="calendars">
                <router-link to="/mood/bodyscan">
                <img src="@/assets/images/mood-calendar-mars.svg" alt="">
                </router-link>
            </div>
            <div class="calendars">
                <router-link to="/mood/bodyscan">
                <img src="@/assets/images/mood-calendar-avril.svg" alt="">
                </router-link>
            </div>
            <div class="calendars">
                <router-link to="/mood/bodyscan">
                <img src="@/assets/images/mood-calendar-mai.svg" alt="">
                </router-link>
            </div>
            <div class="calendars">
                <router-link to="/mood/bodyscan">
                <img src="@/assets/images/mood-calendar-juin.svg" alt="">
                </router-link>
            </div>
            <div class="calendars">
                <router-link to="/mood/bodyscan">
                <img src="@/assets/images/mood-calendar-juillet.svg" alt="">
                </router-link>
            </div>
            <div class="calendars">
                <router-link to="/mood/bodyscan">
                <img src="@/assets/images/mood-calendar-aout.svg" alt="">
                </router-link>
            </div>
            <div class="calendars">
                <router-link to="/mood/bodyscan">
                <img src="@/assets/images/mood-calendar-sept.svg" alt="">
                </router-link>
            </div>
            <div class="calendars">
                <router-link to="/mood/bodyscan">
                <img src="@/assets/images/mood-calendar-oct.svg" alt="">
                </router-link>
            </div>
            <div class="calendars">
                <router-link to="/mood/bodyscan">
                <img src="@/assets/images/mood-calendar-nov.svg" alt="">
                </router-link>
            </div>
            <div class="calendars">
                <router-link to="/mood/bodyscan">
                <img src="@/assets/images/mood-calendar-dec.svg" alt="">
                </router-link>
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
        grid-template-columns: 24% 24% 24% 24%;
        grid-gap: 0 1%;
        padding: 0 10%;
        margin: 2% 0;
    }
</style>