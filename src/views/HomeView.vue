<template>
  <div class="home">
    <AppHeader msg="Welcome to Your Vue.js App"/>
    <SearchTitle @changeTitle="changeTitle" @handleSearchTitle="handleSearchTitle"/>
    <h1>Search ({{searchTitle}})</h1>
    <Movies :movies="movies"/>
    <div class="text-center bg-danger text-light">
      <p>Footer&copy;</p>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import AppHeader from '@/components/AppHeader.vue'
// import MovieCard from '@/components/MovieCard.vue'
import SearchTitle from '@/components/SearchTitle.vue'
import Movies from '@/components/Movies.vue'

export default {
  name: 'HomeView',
  components: {
    AppHeader,
    // MovieCard,
    Movies,
    SearchTitle
  },
  data(){
    return{
      movies:[],
      savedMovies:[],
      searchTitle:"",
      results:5
    }
  },
  mounted(){
    console.log("Mounted fired!")
    this.fetchMovies();
  },
  methods:{
    async fetchMovies(){
      let response = await fetch('https://omdbapi.com?s=die+hard&apikey=trilogy');
      let data = await response.json()
      console.log("Data",data)
      this.movies = data.Search
    },

    async handleSearchTitle(){
      console.log("Title fired!")
     let response = await fetch(`https://omdbapi.com?s=${this.searchTitle}&apikey=trilogy`);
      let data = await response.json()
      console.log("Data",data)
      this.movies = data.Search
    },

    async changeTitle(title){
      console.log('changing title!')
      this.searchTitle = title;
    }
  }
}
</script>
