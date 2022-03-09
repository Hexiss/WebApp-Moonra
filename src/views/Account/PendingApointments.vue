<template>
  <div>
      <h1>Rendez-vous en attente</h1>
      <div class="apointment" v-for="datas in data" :key="datas.id">
          <div class="details">
            <div class="avatar"></div>
            <div>
                <span>{{datas.clientName}}</span>
                <span>{{datas.date}}</span>
                <span>{{datas.time}}</span>
            </div>

          </div>

          <div class="validation">
              Valider le rendez-vous :
              <div class="validation-buttons">
                  <button>Non</button>
                  <button>Oui</button>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            data: [
                {
                    id: 1,
                    clientName: 'Client name 1',
                    date: '01/01/01',
                    time: '01h01'
                },
                {
                    id: 2,
                    clientName: 'Client name 2',
                    date: '02/02/02',
                    time: '02h02'
                },
                {
                    id: 3,
                    clientName: 'Client name 3',
                    date: '03/03/03',
                    time: '03h03'
                }
            ]
        }
    }
}
</script>

<style>

    .apointment {
        margin: 3% 0;
        display: grid;
        grid-template-columns: 60% 40%;
    }

    .details {
        display :grid;
        grid-template-columns: 10% 90%;
    }

    .avatar {
        border: 1px solid black;
        border-radius: 50%;
    }

    .details span {
        margin: 0 5%;
    }

</style>