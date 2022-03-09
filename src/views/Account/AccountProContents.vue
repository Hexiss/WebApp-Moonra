<template>
  <div>
    <SearchBar/>
    <div class="subjects">
      <span>Yoga</span>
      <span>Luminothérapie</span>
      <span>Méditation</span>
      <span>Fitness</span>
      <span>Sophrologie</span>
      <span>Fitness</span>
      <div class="news">
        <h2>Nouveaux</h2>
        <div class="news-grid">
          <div class="news-item" v-for="datas in videos.news" :key="datas.id">
              <p>{{datas.name}} </p>
              <p>{{datas.therapistName}}</p>
              <p>{{datas.length}}</p>
          </div>
        </div>
      </div>
      <div class="yoga">
        <h2>Yoga</h2>
        <div class="yoga-grid">
          <div class="yoga-item" v-for="datas in videos.yoga" :key="datas.id">
              <p>{{datas.name}} </p>
              <p>{{datas.therapistName}}</p>
              <p>{{datas.length}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SearchBar from '@/components/SearchBar.vue'

export default {
  data() {
    return {
      videos: {
        news: [
          {
            id: '1',
            name: 'Nom vidéo 1',
            therapistName: 'Nom thérapeute 1',
            length: '1min'
          },
          {
            id: '2',
            name: 'Nom vidéo 2',
            therapistName: 'Nom thérapeute 2',
            length: '2min'
          },
          {
            id: '3',
            name: 'Nom vidéo 3',
            therapistName: 'Nom thérapeute 3',
            length: '19min'
          },
          {
            id: '4',
            name: 'Nom vidéo 4',
            therapistName: 'Nom thérapeute 4',
            length: '14min'
          }
        ],
        yoga: [
          {
            id: '1',
            name: 'Nom vidéo yoga 1',
            therapistName: 'Nom thérapeute 1',
            length: '1min'
          },
          {
            id: '2',
            name: 'Nom vidéo yoga 2',
            therapistName: 'Nom thérapeute 2',
            length: '1min'
          },
          {
            id: '3',
            name: 'Nom vidéo yoga 3',
            therapistName: 'Nom thérapeute 3',
            length: '1min'
          },
          {
            id: '4',
            name: 'Nom vidéo 4',
            therapistName: 'Nom thérapeute 4',
            length: '14min'
          }
        ]
      }
    }
  },
  components: {
    SearchBar
  }
}
</script>

<style scoped>

  * {
    text-align: center;
  }

  .subjects {
    margin: 1% 0
  }

  .subjects span {
    border: 1px solid whitesmoke;
    padding: 0.4%;
    margin: 1%;
  }



  .news {
    margin: 3% 0;
  }

    .news h2 {
      font-size: 1.5rem;
      font-weight: bold;
      margin: 3% 0;
      margin-left: 9%;
    }

  .news-grid {
    display: grid;
    grid-template-columns: 20% 20% 20% 20%;
    grid-gap: 1%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .news-item {
    border: 1px solid whitesmoke;
  }

  .yoga {
    margin: 3% 0;
  }

    .yoga h2 {
      font-size: 1.5rem;
      font-weight: bold;
      margin: 3% 0;
      margin-left: 9%;
    }

  .yoga-grid {
    display: grid;
    grid-template-columns: 20% 20% 20% 20%;
    grid-gap: 1%;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .yoga-item {
    border: 1px solid whitesmoke;
  }

</style>