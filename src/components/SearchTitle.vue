<template lang="">
    <div class="d-flex align-items-center justify-content-start p-4 bg-danger text-light">
        <div class="form-div me-2">
            <label for="title"><h4>Title</h4></label>
        </div>
        <div class="form-div w-50 me-2">
            <input @input="$emit('changeTitle',this.searchtitle)" type="text" name="searchtitle" placeholder="Search title..." v-model="searchtitle" autocomplete="off" class="form-control p-1 w-100">
        </div>
        <button @click="$emit('handleSearchTitle',title)" class="btn btn-primary">Search Title</button>
        <h3 class="ms-5">Title: {{searchtitle}} </h3>
    </div>
</template>
<script>
export default {
        name:"SearchTitle",
        props:{
            title:String
        },
        data(){
            return{
                searchtitle:""
            }
        },

        methods:{
        
        }
}
</script>
<style lang="">
    
</style>