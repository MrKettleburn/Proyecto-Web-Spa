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
            text: 'Enjoy our luxurious and beautiful areas, designed to provide you with an unparalleled spa experience. Each space is elegantly decorated, creating an atmosphere that invites relaxation and enjoyment. Here, every detail matters to make you feel special.'
        },

        {
            image:image2,
            title: 'Personalized Holistic Care',
            text: 'Our personalized holistic care approach ensures that every treatment is tailored to your specific needs. We take the time to understand your desires and concerns, providing you with care that goes beyond the physical, promoting a complete balance between body and mind.'
        },

        {
            image:image3,
            title: 'Luxuries and Beautiful Areas',
            text: 'Enjoy our luxurious and beautiful areas, designed to provide you with an unparalleled spa experience. Each space is elegantly decorated, creating an atmosphere that invites relaxation and enjoyment. Here, every detail matters to make you feel special.'
        },

        {
            image:image4,
            title: 'Natural and Organic Products ',
            text: 'We use only natural and organic products in our treatments, ensuring that your skin receives the best from nature. Our products are carefully selected to provide effective results without compromising your health or the environment.'
        },

        {
            image:image5,
            title: 'Highly Trained Professionals',
            text: 'Our team consists of highly trained professionals dedicated to providing you with the best possible care. With years of experience and training, our specialists are ready to offer you personalized treatments that cater to your needs.'
        },

        {
            image:image6,
            title: 'First-Class Facilities',
            text: 'At Your Best Spa, we have first-class facilities that ensure your comfort and satisfaction. From treatment rooms to relaxation areas, every space is designed to provide you with an exceptional spa experience.'
        },
        {
            image:image7,
            title: 'Total Relaxation',
            text: 'Total relaxation is our goal. Here, you can leave your worries behind and immerse yourself in a state of calm and peace. Our treatments are designed to help you achieve a deep sense of well-being and tranquility.'
        },
        {
            image:image8,
            title: 'Variety of Treatments',
            text: 'We offer a wide variety of treatments to meet all your wellness needs. From relaxing massages to rejuvenating facial treatments, each option is designed to provide you with a unique and revitalizing experience.'
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