<template>
    <div  v-if="comments.length > 0" class="bg-dark py-vh-3">
        <div class="container px-vw-5">
            <h2 class="h3 ">Коментарии {{ comments.length }}</h2>
            <div class="row d-flex gx-5 align-items-center">
                <div class="col-12" v-for="comment in comments">
                    <div class="rounded-5 bg-black p-5" data-aos="zoom-in-right">
                        <p class="text-secondary lead" v-html="comment.text"></p>
                        <div class="d-flex justify-content-start align-items-center border-top border-secondary pt-3">
                            <div>
                                <span class="h6 fw-5">{{ comment.author }}</span><br>  
                                <small class="text-secondary">{{ comment.created_at }}</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-else>

    </div>
</template>

<script setup>
    const {comments} = defineProps(['comments'])
</script>
