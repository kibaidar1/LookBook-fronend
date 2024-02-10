
<template>
    <div class="card bg-transparent mb-5" data-aos="zoom-in-up">
        <div class="bg-dark shadow rounded-5 p-0">
            <nuxt-link :to="look.slug" >
                <img :src="look.images[0].image" width="582" height="327" alt="abstract image"
                class="img-fluid rounded-5 no-bottom-radius" loading="lazy">
            </nuxt-link>
            <div class="p-5 text-center">
                <h2><nuxt-link :to="look.slug" class="text-white link-fancy link-fancy-light">{{ look.name }}</nuxt-link></h2>
                <span class="pb-4 text-secondary" v-html="$short_text(look.description, 200)"></span>
                <nuxt-link :to="look.slug" class="link-fancy link-fancy-light">Взглянуть</nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>
    const {look} = defineProps(['look'])
    const {short} = useNuxtApp()
</script>

