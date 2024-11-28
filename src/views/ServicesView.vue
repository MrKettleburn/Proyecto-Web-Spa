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
     
</template>

<script setup>
  
import PostContainerComp from '@/components/PostContainerComp.vue';
import PricingComp from '@/components/PricingComp.vue';
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