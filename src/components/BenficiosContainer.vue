<template>
    <div class= "post-container ">
        
        <PostCard v-for="(post, index) in posts" :key="index" :image="post.image"  :title="post.title" :text="post.text"/>
    </div>
    <RouterView/>
</template>

<script setup>
    import {ref} from 'vue';
    import PostCard from './PostCard.vue';

    import image1 from '@/img/ambiente-traquilo.jpg';
    import image2 from '@/img/atencion-holistica.jpg';
    import image3 from '@/img/lujo.jpg';
    import image4 from '@/img/productos-calidad.jpg';
    import image5 from '@/img/profesionales.jpg';
    import image6 from '@/img/instalaciones-primera-clase.jpg';
    import image7 from '@/img/relajacion-total.jpg';
    import image8 from '@/img/variedad-trat.jpg';

    const posts=ref([
        {
            image: image1,
            title: 'Tranquil Environment',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad nam perferendis inventore aliquam dicta quod iusto quisquam, quam suscipit corrupti, tempore eaque repellendus voluptatem, reiciendis cum soluta unde quae?'
        },

        {
            image:image2,
            title: 'Personalized Holistic Care',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad nam perferendis inventore aliquam dicta quod iusto quisquam, quam suscipit corrupti, tempore eaque repellendus voluptatem, reiciendis cum soluta unde quae?'
        },

        {
            image:image3,
            title: 'Luxuries and Beautiful Areas',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad nam perferendis inventore aliquam dicta quod iusto quisquam, quam suscipit corrupti, tempore eaque repellendus voluptatem, reiciendis cum soluta unde quae?'
        },

        {
            image:image4,
            title: 'Natural and Organic Products ',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad nam perferendis inventore aliquam dicta quod iusto quisquam, quam suscipit corrupti, tempore eaque repellendus voluptatem, reiciendis cum soluta unde quae?'
        },

        {
            image:image5,
            title: 'Highly Trained Professionals',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad nam perferendis inventore aliquam dicta quod iusto quisquam, quam suscipit corrupti, tempore eaque repellendus voluptatem, reiciendis cum soluta unde quae?'
        },

        {
            image:image6,
            title: 'First-Class Facilities',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad nam perferendis inventore aliquam dicta quod iusto quisquam, quam suscipit corrupti, tempore eaque repellendus voluptatem, reiciendis cum soluta unde quae?'
        },
        {
            image:image7,
            title: 'Total Relaxation',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim ad nam perferendis inventore aliquam dicta quod iusto quisquam, quam suscipit corrupti, tempore eaque repellendus voluptatem, reiciendis cum soluta unde quae?'
        },
        {
            image:image8,
            title: 'Variety of Treatments',
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
        height: 15rem;
    }

    .card:hover{
        transform: translateY(-30px);
    }

    PostCard{
        height: 10rem;
    }
</style>