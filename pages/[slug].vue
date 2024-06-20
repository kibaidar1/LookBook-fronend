<template>
    <html>
        <body>
            <main class="content container">
                <div v-if="pending">
                    Loading ...
                </div>
                <div v-else>
                    <h1 class="visually-hidden">{{look.name}} Detail</h1>
                    
                    <ul class="look-images__list">
                        <h2 class="visually-hidden">{{look.name}} images</h2>
                        <li class="image__item" v-for="image in look.images" data-aos="zoom-in-up">
                            <img :src="image.image" alt="{{look.name}} image">
                        </li>
                    </ul>

                    <section class="look-info" data-aos="fade-left">
                        <h2 class=look-name>{{ look.name }}</h2>
                        <p class="look-description" v-html="look.description"></p>
                        <p class="look-author">Автор: {{ look.authors_name }}</p>
                        <p class="look-publication_date">{{look.created_at}}</p>
                    </section>

                    <section class="look-clothes">
                        <h2 class="visually-hidden">{{look.name}} clothes</h2>
                        <ul class="clothes-categories__list">
                            <li class="clothes-categories__item" v-for="clothes_category in look.clothes_category" data-aos="fade-right">
                                <h3 class="clothes-category__name">{{ clothes_category.name }}</h3>
                                <ul class="clothes__list">
                                    <li class="clothes__item" v-for="clothes in clothes_category.clothes" data-aos="zoom-in-up">
                                        <h4>{{ clothes.name }}</h4><br>
                                        <ul class="links__list">
                                            <li class="links__item" v-for="link in clothes.links">
                                                <nuxt-link :to="link.link" class="link">Перейти в магазин</nuxt-link>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>  
                            </li>
                        </ul>
                    </section>
                </div>
            </main>
        </body>
    </html>
</template>

<script setup>
    const runtimeConfig = useRuntimeConfig();
    const API_URI = runtimeConfig.public.API_URI
    const { slug } = useRoute().params
    const url = API_URI + 'looks/' + slug
    const {pending, data: look} = await useFetch(url, {key: slug, 
        immediate: process.dev || process.env.prerender,
        initialCache: false})

    useHead({
        title: look._rawValue.name,
    })
</script>