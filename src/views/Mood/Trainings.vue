<template>
    <div class="contain">
        <h1>Entrainements</h1>
        <div class="header">
            <div class="week active">
                <p>Semaine</p>
            </div>
            <div class="month">
                <p>Mois</p>
            </div>
            <div class="year">
                <p>Année</p>
            </div>
        </div>
        <div class="table">
        <table>
            <tr>
                <th>Activité</th>
                <th>Actuel</th>
                <th>Précédent</th>
            </tr>
            <tr>
                <td style="font-style:italic">Yoga</td>
                <td>10min</td>
                <td>20min</td>
            </tr>
            <tr>
                <td style="font-style:italic">Méditation</td>
                <td>10min</td>
                <td>20min</td>
            </tr>
            <tr>
                <td style="font-style:italic">Fitness</td>
                <td>10min</td>
                <td>20min</td>
            </tr>
            <tr>
                <td style="font-style:italic">Yoga</td>
                <td>10min</td>
                <td>20min</td>
            </tr>
            <tr>
                <td style="font-style:italic">Méditation</td>
                <td>10min</td>
                <td>20min</td>
            </tr>
            <tr>
                <td style="font-style:italic">Fitness</td>
                <td>10min</td>
                <td>20min</td>
            </tr>

        </table>
        </div>
    </div>
</template>

<style scoped>

    h1 {
        font-size: 50px;
        padding: 3%;
        color: white;
    }

    .header {
        display: grid;
        grid-template-columns: 32% 32% 32%;
        align-items: center;
        text-align: center;
        margin: 0 30%;
        grid-gap: 0 1%;
        background-color: #fff;
        border-radius: 20px;
        height: 50px;
        cursor: pointer;
    }

    .header .active {
        background-color: #FFA14D;
    }

    .header p {
        font-weight: bold;
    }

    .header .week {
        border-right: 1px solid black;
        height: 100%;
        border-top-left-radius: 20px;
        border-bottom-left-radius: 20px;
        display: grid;
        align-items: center;
    }

    .header .year {
        border-left: 1px solid black
    }

    .contain {
        height: 100vh;
        background-color: #C5C7DB;
    }

    .table {
        margin: 1% 30%;
    }

    table {
        border-radius: 20px;
        background-color: #fff;
    }

    th {
        font-weight: bold;
    }

    th, td {
        padding: 15px;
        text-align: left;
        width: 200px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

</style>