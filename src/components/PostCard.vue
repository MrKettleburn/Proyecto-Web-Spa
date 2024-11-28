<template>
    <div class="card border-primary shadow-lg" style="width: 18rem; height: 47rem" >
        <img :src="image" class="card-img-top img-fluid" alt="Imagen del Servicio 1"  style="height: 22rem" >
        <div class="card-body" >
            <h3 class="card-title">{{title}}</h3>
            <p class="card-text">{{text}}</p>
            <router-link to="/login" class="btn btn-primary d-none d-lg-block" >More Details</router-link>
        </div>
        
    </div>
    <RouterView/>
</template>

<script setup>
    

    import { defineProps } from 'vue';
    const props= defineProps({
        image:{
            type: String,
            required: true,
        },
        title:{
            type: String,
            required: true,
        },
        text:{
            type: String,
            required: true,
        }
    });
    
</script>

<style>
    .card{
        transition: transform 0.2s;
        margin:10px;
        text-align: center;
        
    }

    .card:hover{
        transform: translateY(-30px);
    }
    .card-body{
        width: 300px;
    }
</style>



