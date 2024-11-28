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
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad nam perferendis inventore aliquam dicta quod iusto quisquam, quam suscipit corrupti, tempore eaque repellendus voluptatem, reiciendis cum soluta unde quae?'
            text: 'Experience the magic of our body massages, designed to release tension and revitalize your body. Each session is a sensory journey that combines therapeutic techniques with essential oils, providing you with a deep relaxation experience. Allow yourself to enjoy a moment of peace and well-being that will transform your day.'
        },

        {
            image:image2,
            title: 'Facial Treatments',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad nam perferendis inventore aliquam dicta quod iusto quisquam, quam suscipit corrupti, tempore eaque repellendus voluptatem, reiciendis cum soluta unde quae?'
            text: 'Revitalize your skin with our personalized facial treatments that nourish and rejuvenate your face. We use high-quality products and innovative techniques to combat aging and enhance your natural beauty. Leave our cabin with radiant and fresh skin, ready to shine.'
        },

        {
            image:image3,
            title: 'Steam Room or Sauna',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad nam perferendis inventore aliquam dicta quod iusto quisquam, quam suscipit corrupti, tempore eaque repellendus voluptatem, reiciendis cum soluta unde quae?'
        },

        {
            image:image4,
            title: 'Body Exfoliation',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad nam perferendis inventore aliquam dicta quod iusto quisquam, quam suscipit corrupti, tempore eaque repellendus voluptatem, reiciendis cum soluta unde quae?'
        },

        {
            image:image5,
            title: 'Manicure and Pedicure',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad nam perferendis inventore aliquam dicta quod iusto quisquam, quam suscipit corrupti, tempore eaque repellendus voluptatem, reiciendis cum soluta unde quae?'
        },

        {
            image:image6,
            title: 'Skin Care',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad nam perferendis inventore aliquam dicta quod iusto quisquam, quam suscipit corrupti, tempore eaque repellendus voluptatem, reiciendis cum soluta unde quae?'
        },
        {
            image:image7,
            title: 'Body Treatments',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad nam perferendis inventore aliquam dicta quod iusto quisquam, quam suscipit corrupti, tempore eaque repellendus voluptatem, reiciendis cum soluta unde quae?'
        },
        {
            image:image8,
            title: 'Hydrotherapy Treatments',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad nam perferendis inventore aliquam dicta quod iusto quisquam, quam suscipit corrupti, tempore eaque repellendus voluptatem, reiciendis cum soluta unde quae?'
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