<template lang="">
<div class="container">
    <div class="row">
        <h1>Movies {{movies.length}}</h1>
        <li class="col-md-4 border border-2 d-flex flex-column align-items-center justify-content-center" v-for="movie of movies">
            <MovieCard :movie="movie"/>
            <!-- <h3>Movie</h3> -->
        </li>
    </div>
    </div>
</template>
<script>
import MovieCard from "./MovieCard.vue"
export default {
        name:"Movies",
        components:{
            MovieCard
        },
        props:{
            movies:Object
        }
}
</script>
<style lang="">
    
</style>