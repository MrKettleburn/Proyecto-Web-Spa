<template>
    <div class="card border-primary shadow-lg" style="width: 18rem;">
        <img src="../img/service-1.jpg" class="card-img-top img-fluid" alt="Imagen del Servicio 1">
        <div class="card-body">
            <h3 class="card-title">{title}</h3>
            <p class="card-text">{text}</p>
            <router-link to="/login" class="btn btn-primary d-none d-lg-block" >More Details</router-link>
        </div>
        
    </div>
    <RouterView/>
</template>

<script setup>
    
</script>

<style>
    .card{
        transition: transform 0.2s;
    }

    .card:hover{
        transform: translateY(-30px);
    }
</style>



