<template>
    <div class= "post-container ">
        <PostCard v-for="(post, index) in posts" :key="index" :image="post.image"  :title="post.title" :text="post.text"/>
    </div>
</template>

<script setup>
    import {ref} from 'vue';
    import PostCard from './PostCard.vue';

    import image1 from '@/img/service-1.jpg';
    import image2 from '@/img/service-2.jpg';
    import image3 from '@/img/service-3.jpg';
    import image4 from '@/img/service-4.jpg';
    import image5 from '@/img/service-5.jpg';
    import image6 from '@/img/service-6.jpg';
    import image7 from '@/img/carousel-2.jpg';
    import image8 from '@/img/carousel-3.jpg';

    const posts=ref([
        {
            image: image1,
            title: 'Body Massages',
            text: 'Experience the magic of our body massages, designed to release tension and revitalize your body. Each session is a sensory journey that combines therapeutic techniques with essential oils, providing you with a deep relaxation experience. Allow yourself to enjoy a moment of peace and well-being that will transform your day.'
        },

        {
            image:image2,
            title: 'Facial Treatments',
            text: 'Revitalize your skin with our personalized facial treatments that nourish and rejuvenate your face. We use high-quality products and innovative techniques to combat aging and enhance your natural beauty. Leave our cabin with radiant and fresh skin, ready to shine.'
        },

        {
            image:image3,
            title: 'Steam Room or Sauna',
            text: 'Immerse yourself in an oasis of warmth and relaxation in our steam room or sauna. This sanctuary will help you release toxins, improve circulation, and alleviate stress. Enjoy a moment of tranquility as your body purifies and revitalizes.'
        },

        {
            image:image4,
            title: 'Body Exfoliation',
            text: 'Renew your skin with our body exfoliation, a treatment that removes dead skin cells and leaves your skin smooth and radiant. We use natural ingredients that nourish and revitalize, providing a sensory experience that awakens your senses and rejuvenates your body.'
        },

        {
            image:image5,
            title: 'Manicure and Pedicure',
            text: 'Enjoy a moment of self-care with our manicure and pedicure, where your hands and feet will receive the treatment they deserve. Our expert stylists use state-of-the-art techniques and quality products to beautify your nails and leave you feeling fresh and elegant.'
        },

        {
            image:image6,
            title: 'Skin Care',
            text: 'Discover the secret to radiant skin with our skin care treatments. From deep cleanses to intensive moisturizations, each service is designed to meet your skins specific needs, helping you look and feel better than ever.'
        },
        {
            image:image7,
            title: 'Body Treatments',
            text: 'Transform your body and mind with our body treatments. Each session is designed to tone, hydrate, and revitalize your skin, using advanced techniques and high-quality products. Leave stress behind and enjoy an experience that renews your energy.'
        },
        {
            image:image8,
            title: 'Hydrotherapy Treatments',
            text: 'Immerse yourself in the healing power of water with our hydrotherapy treatments. Designed to relax muscles and improve circulation, these treatments offer a unique experience that revitalizes your body and mind, leaving you renewed and energized.'
        },

    ])
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