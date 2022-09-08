<template lang="">
    <div class="movie-card d-flex flex-column align-items-center col-md-4">
        <h3>{{movie?.Title}} </h3>
        <img height="150" width="100" :src="movie.Poster" alt="poster"/>
        <div class="d-flex">
            <!-- <h4>Rated:{{movie.Year}} </h4> -->
        </div>
    </div>
</template>
<script>
export default {
        name:"MovieCard",
        props:{
            movie:Object
        }
}
</script>
<style lang="">
    
</style>