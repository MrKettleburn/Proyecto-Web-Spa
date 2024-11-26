<template>
<HomeComp/>
<AboutComp/>

    <!-- Testimonial Start -->
    <div class="container-fluid py-5">
        <div class="container py-5">
            <div class="row align-items-center">
                <div class="col-lg-6 pb-5 pb-lg-0">
                    <img class="img-fluid w-100" src="../img/testimonial.jpg" alt="">
                </div>
                <div class="col-lg-6">
                    <h6 class="d-inline-block text-primary text-uppercase bg-light py-1 px-2">Testimonial</h6>
                    <h1 class="mb-4">What Our Clients Say!</h1>

                    <div class="owl-carousel testimonial-carousel">
                        <div class="position-relative" v-for="(opinion, index) in ultimasOpiniones" :key="index">
                        <i class="fa fa-3x fa-quote-right text-primary position-absolute" style="top: -6px; right: 0;"></i>
                        <div class="d-flex align-items-center mb-3">
                            <img class="img-fluid rounded-circle" src="../img/testimonial-3.jpg" style="width: 60px; height: 60px;" :alt="opinion.nombre">
                            <div class="ml-3">
                            <h6 class="text-uppercase">{{ opinion.nombre }}</h6>
                            <span>{{ opinion.profesion }}</span>
                            </div>
                        </div>
                        <p class="m-0">{{ opinion.mensaje }}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Testimonial End -->
</template>

<script setup>
 import AboutComp from '@/components/AboutComp.vue';
 import HomeComp from '@/components/HomeComp.vue';

 import { ref, onMounted } from 'vue';

// Importamos las opiniones desde el archivo JSON
import opinionesData from '@/assets/opiniones.json';

// Variable reactiva para almacenar las opiniones
const opiniones = ref([]);

// Cargar las opiniones en el montaje del componente
onMounted(() => {
  opiniones.value = opinionesData;
});

// Computada para obtener las tres últimas opiniones
const ultimasOpiniones = opinionesData.slice(-3);
</script>