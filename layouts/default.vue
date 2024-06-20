

<template>

    <div>
        <Header />  
        <slot />
        <Foot/>
    </div>

</template>

<script setup>
    useHead({
        meta: [{charset: 'UTF-8'}],
        meta: [{name: 'viewport', content: "width=device-width, initial-scale=1.0"}],
        link: [{rel: 'icon', type: 'image/png', href: '/favicon-32x32.png'}],
    })

</script>
