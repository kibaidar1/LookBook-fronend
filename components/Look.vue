
<template>
    <div class="card" data-aos="zoom-in-up">
        <div v-if="look.images[0]">
            <nuxt-link :to="look.slug"><img :src="look.images[0].image" :alt=look.name loading="lazy"></nuxt-link>
        </div>
        <div v-else>
            <nuxt-link :to="look.slug"><img src="/assets/img/icon.svg" :alt=look.name loading="lazy"></nuxt-link>
        </div>
        <div class="card__info">
            <nuxt-link :to="look.slug" class="link"><h3 class="card__title">{{ look.name }}</h3></nuxt-link>
            <p class="card__description" v-html="$short_text(look.description, 200)"></p>
        </div>
    </div>
</template>

<script setup>
    const {look} = defineProps(['look'])
    const {short} = useNuxtApp()
</script>

