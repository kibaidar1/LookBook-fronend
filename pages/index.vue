<template>
    <html>
        <head>
            <title>LOOK HUB</title>
        </head>


        <body class="bg-black text-white mt-0">
            <!-- Intro -->
            <Intro />

            <!-- Header -->    

            <!-- Posts -->
            <div class="container px-vw-5 py-vh-3 rounded-5 shadow">
                <div class="row gx-5">
                    <div class="col-12 col-md-6" v-for="look in looks">
                        <Look :look="look" />
                    </div>
                </div>
            </div>
        </body>
    </html>


</template>

<script setup>
    const runtimeConfig = useRuntimeConfig();
    const API_URI = runtimeConfig.public.API_URI
    console.log(API_URI)
    const {data: looks} = await useFetch(API_URI + 'looks/')
  
</script>
