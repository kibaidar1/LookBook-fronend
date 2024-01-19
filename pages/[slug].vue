<template>
    <html>
        <head>
            <title>{{ look.name }}</title>
        </head>


        <body class="bg-black text-white mt-0 " >
                <div class="container">
                    <div class="row d-flex justify-content-center py-vh-5 pb-0 ">
                        <div v-for="image in look.images" class="row align-items-end"  data-aos="zoom-in-up">
                            <div class="col-12 py-vh-2">
                                <img :src="image.image" width="1024" height="696" alt="изображение образа"
                                class="img-fluid row d-flex  position-relative rounded-5 shadow" data-aos="zoom-up">
                            </div>
                        </div>

                        <div class="col-12 col-lg-10 col-xl-8" data-aos="fade-left">
                            <div class="column">
                                <div class="row-12" >
                                    <h1 class="display-1 fw-bold ">{{ look.name }}</h1>
                                    <span class="pb-4 text-secondary" v-html="look.description"> </span>
                                </div>
                                <div class="bg-gray row d-flex align-items-start d-flex justify-content-start align-items-center pt-3">
                                    <div class="col-10 col-lg-5">
                                        <span class="h6 fw-">Автор: {{ look.authors_name }}</span><br>
                                        <small class="text-secondary">{{ look.created_at }}</small>
                                    </div>
                                    <div class="row-10 col-lg-5">
                                        <span class="h6 fw-">LIKES: {{ look.likes }}</span><br>
                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        
                        <div v-for="cloth_category in look.clothes_category" class="col-12 col-lg-10 col-xl-8">
                            <div class="row d-flex align-items-start" data-aos="fade-right">
                                <div class="col-12 col-lg-7">
                                    <h2 class="h3 mt-5 border-top pt-5">{{ cloth_category.name }}</h2>
                                </div>
                                <div v-for="cloth in cloth_category.clothes" class="row d-flex align-items-start justify-content-center py-vh-1" data-aos="fade">
                                    <div class="col-12 col-lg-10 col-xl-9">
                                        <div class="p-5 small bg-gray-900">
                                            <h3 class="h6">{{ cloth.name }}</h3>
                                            <div v-for="link in cloth.links">
                                                <nuxt-link :to="link.link" class="text-secondary"> Перейти в магазин </nuxt-link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                </div>
            <Comments :comments="look.comments" />
        </body>
    </html>


</template>

<script setup>
    const { slug } = useRoute().params
    const url = 'https://aidarv.pythonanywhere.com/looks/' + slug
    const {data: look} = await useFetch(url, {key: slug})

    console.log(look.images)



  
</script>