<template>
    <html>
        <body>
            <main class="content container">
                <!-- Banner -->    
                <h1 class="visually-hidden">Look Hub Main</h1>
                <Banner />

                <!-- Looks -->
                <h2 class="visually-hidden">Looks cards</h2>

                <div v-if="looks.length === 0 && !loading" class="no-data">Нет данных для отображения</div>

                <div v-else>
                    <ul class="looks__cards">
                        <li v-for="look in looks" :key="look.id">
                            <Look :look="look" />
                        </li>  
                    </ul>

                    <button 
                        class="load-more-button button" 
                        data-aos="zoom-in" 
                        v-if="nextPageLink" 
                        @click="loadMore">
                        Загрузить ещё
                    </button>
                    
                    <div class="pagination" data-aos="fade-up">

                        <button 
                            class="pagination-boundary-button button" 
                            @click="goToPage(1)" 
                            :disabled="currentPage === 1">
                            &lt;&lt;&lt;
                        </button>

                        <button 
                            v-for="page in generatePagination(currentPage, lastPage)" :key="page" 
                            @click="page !== '...' && goToPage(page)" 
                            :disabled="page === '...' || currentPage === page" 
                            class="pagination-page-button" 
                            :class="{ link: currentPage !== page }">
                            {{ page }}
                        </button>

                        <button 
                            class="pagination-boundary-button button" 
                            @click="goToPage(lastPage)" 
                            :disabled="currentPage === lastPage">
                            >>>
                        </button>
                    </div>     
                </div>
            </main>  
        </body>
    </html>


</template>

<script setup>
    const runtimeConfig = useRuntimeConfig();
    const API_URI = runtimeConfig.public.API_URI;
    const looks_url = API_URI + 'looks/'

    const looks = ref([])
    const currentPage = ref(1)
    const nextPageLink = ref(null)
    const prevPageLink = ref(null)
    const lastPage = ref(1)

    useHead({
        title: "LOOK HUB",
    })

    const fetchData = async (url) => {
        try {
            const {pending, data} = await useFetch(url, {key: `${url}?${currentPage}`})
            
            looks.value.push(...data.value.results)
            currentPage.value = Number(data.value.currentPage)
            prevPageLink.value = data.value.previous
            nextPageLink.value = data.value.next
            lastPage.value = Number(data.value.lastPage)
        } 
        catch (error) {
            console.error('Ошибка при загрузке данных:', error)
        }
    }

    const loadMore = () => {
        fetchData(nextPageLink.value)
    }

    const goToPage = (page) => {
        looks.value = []
        fetchData(`${looks_url}?page=${page}`)
    }

    fetchData(`${looks_url}?page=1`)


    function generatePagination(currentPage, lastPage) {
        let startPage = Math.max(1, currentPage - 2);
        let endPage = Math.min(lastPage, startPage + 4);

        // Adjust startPage if endPage is less than 5
        startPage = Math.max(1, endPage - 4);

        let pages = [];
        for (let i = startPage; i <= endPage; i++) {
            pages.push(i);
        }

        return pages;
    }
  
</script>



