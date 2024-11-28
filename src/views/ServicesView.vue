

<template>
    <!-- Header Start -->
    <div class="jumbotron jumbotron-fluid bg-jumbotron" style="margin-bottom: 90px;">
        <div class="container text-center py-5">
            <h3 class="text-white display-3 mb-4">Services</h3>
            
        </div>
    </div>
    <!-- Header End -->


    <!-- Service Start -->
    <PostContainerComp/>
    <PricingComp/>
    <RouterView/>
        <div class="row justify-content-center bg-appointment mx-0">
            <div class="col-lg-6 py-5">
                <div class="p-5 my-5" style="background: rgba(33, 30, 28, 0.7);">
                    <h1 class="text-white text-center mb-4">Make Appointment</h1>
                    <form>
                        <div class="form-row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <input type="text" class="form-control bg-transparent p-4" placeholder="Your Name" required="required" />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <input type="email" class="form-control bg-transparent p-4" placeholder="Your Email" required="required" />
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <input 
                                        type="date" 
                                        v-model="selectedDate" 
                                        class="form-control bg-transparent p-4" 
                                        :placeholder="selectedDate ? '' : placeholderDateText"
                                    />
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <input 
                                        type="time" 
                                        v-model="selectedTime" 
                                        class="form-control bg-transparent p-4" 
                                        :placeholder="selectedTime ? '' : placeholderTimeText"
                                    />
                                </div>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="col-sm-6">
                                <div class="form-group">
                                    <select class="custom-select bg-transparent px-4" style="height: 47px;">
                                        <option selected>Select A Service</option>
                                        <option 
                                        v-for="service in services" 
                                        :key="service.id" 
                                        :value="service.id"
                                        >
                                        {{ service.name }}
                                        </option>
                                    </select>
                                </div>
                            </div>
                            <div class="col-sm-6">
                                <button class="btn btn-primary btn-block" type="submit" style="height: 47px;">Make Appointment</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
  
    <!-- Service End -->
     
     
</template>

<script setup>
import { ref, onMounted } from 'vue';
import servicesData from '@/assets/services.json'; // Importa el JSON de servicios

import PostContainerComp from '@/components/PostContainerComp.vue';
import PricingComp from '@/components/PricingComp.vue';
const services = ref([]);


const selectedDate = ref('');
const selectedTime = ref('');
// Texto del placeholder personalizado
const placeholderDateText = 'Select Date';
const placeholderTimeText = 'Select Time';

onMounted(() => {
  services.value = servicesData; // Carga los servicios en la variable
})
</script>

<style>
.cont{
    align-items: normal;
    flex-direction: row;
}

.img-fluid{
    width: 35%;
}
</style>