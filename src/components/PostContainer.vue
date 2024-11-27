<template>
    <div class="post-container">
        <div class="card border-primary shadow-lg" style="width: 18rem;">
            <img src="../img/service-1.jpg" class="card-img-top img-fluid" alt="Imagen del Servicio 1">
            <div class="card-body">
            <h3 class="card-title">Body Massages</h3>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad nam perferendis inventore aliquam dicta quod iusto quisquam, quam suscipit corrupti, tempore eaque repellendus voluptatem, reiciendis cum soluta unde quae?</p>
            <router-link to="/login" class="btn btn-primary d-none d-lg-block" >More Details</router-link>
            </div>
        
        </div>

        <div class="card border-primary shadow-lg" style="width: 18rem;">
            <img src="../img/service-2.jpg" class="card-img-top img-fluid" alt="Imagen del Servicio 1">
            <div class="card-body">
            <h3 class="card-title">Facial Treatments</h3>
            <p class="card-text">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet excepturi explicabo dolorem ratione atque repellendus veritatis repellat quia aliquam, recusandae reprehenderit hic aliquid labore omnis natus iste optio dolore maxime!</p>
            <router-link to="/login" class="btn btn-primary d-none d-lg-block" >More Details</router-link>
            </div>
        
        </div>

        <div class="card border-primary shadow-lg" style="width: 18rem;">
            <img src="../img/service-3.jpg" class="card-img-top img-fluid" alt="Imagen del Servicio 1">
            <div class="card-body">
            <h3 class="card-title">Steam Room or Sauna</h3>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo eligendi consequatur facere voluptatibus deserunt unde dolores esse cum est consequuntur itaque, possimus perferendis sit maxime, corrupti reiciendis totam neque magni?</p>
            <router-link to="/login" class="btn btn-primary d-none d-lg-block" >More Details</router-link>
            </div>
        
        </div>

        <div class="card border-primary shadow-lg" style="width: 18rem;">
            <img src="../img/service-4.jpg" class="card-img-top img-fluid" alt="Imagen del Servicio 1">
            <div class="card-body">
            <h3 class="card-title">Body Exfoliation</h3>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, totam temporibus dolore magni saepe magnam doloribus accusantium qui ab alias culpa deleniti voluptates esse neque delectus fugit. Velit, minima doloremque.</p>
            <router-link to="/login" class="btn btn-primary d-none d-lg-block" >More Details</router-link>
            </div>
        
        </div>

        <div class="card border-primary shadow-lg" style="width: 18rem;">
            <img src="../img/service-5.jpg" class="card-img-top img-fluid" alt="Imagen del Servicio 1">
            <div class="card-body">
            <h3 class="card-title">Manicure and Pedicure</h3>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus at corrupti voluptates dignissimos ut et. Voluptatibus eveniet doloremque nostrum in cumque, earum ea nulla, commodi rem voluptas maiores possimus ipsam.</p>
            <router-link to="/login" class="btn btn-primary d-none d-lg-block" >More Details</router-link>
            </div>
        
        </div>

        <div class="card border-primary shadow-lg" style="width: 18rem;">
            <img src="../img/service-6.jpg" class="card-img-top img-fluid" alt="Imagen del Servicio 1">
            <div class="card-body">
            <h3 class="card-title">Body Treatments</h3>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ducimus nemo doloremque, quos saepe a inventore ipsum, architecto nesciunt iste incidunt dolores accusamus nostrum dolore autem eos? Porro, provident expedita.</p>
            <router-link to="/login" class="btn btn-primary d-none d-lg-block" >More Details</router-link>
            </div>
        
        </div>

        <div class="card border-primary shadow-lg" style="width: 18rem;">
            <img src="../img/carousel-2.jpg" class="card-img-top img-fluid" alt="Imagen del Servicio 1" style="height: 22rem">
            <div class="card-body">
            <h3 class="card-title">Aromatherapy Therapy</h3>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ducimus nemo doloremque, quos saepe a inventore ipsum, architecto nesciunt iste incidunt dolores accusamus nostrum dolore autem eos? Porro, provident expedita.</p>
            <router-link to="/login" class="btn btn-primary d-none d-lg-block" >More Details</router-link>
            </div>
        
        </div>

        <div class="card border-primary shadow-lg" style="width: 18rem; ">
            <img src="../img/carousel-3.jpg" class="card-img-top img-fluid" alt="Imagen del Servicio 1" style="height: 22rem" >
            <div class="card-body">
            <h3 class="card-title">Hydrotherapy Treatments</h3>
            <p class="card-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ducimus nemo doloremque, quos saepe a inventore ipsum, architecto nesciunt iste incidunt dolores accusamus nostrum dolore autem eos? Porro, provident expedita.</p>
            <router-link to="/login" class="btn btn-primary d-none d-lg-block" >More Details</router-link>
            </div>
        
        </div>
    <RouterView/>


    </div>

</template>

<script setup>
    
</script>

<style scoped>
    .post-container{
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        margin:10px;
        
    }
    .card{
        transition: transform 0.2s;
        margin: 15px;
    }

    .card:hover{
        transform: translateY(-30px);
    }
</style>