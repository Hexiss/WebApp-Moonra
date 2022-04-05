<template>
    <div class="contain">
        <h1>Entrainements</h1>
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
        border: 1px solid whitesmoke;
        width: 200px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }

</style>