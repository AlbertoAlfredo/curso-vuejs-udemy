<template>
    <section>
        <div class="container ">
            <hcode-section-news-individual 
                v-for="notice in hcodeNews"
                :key="notice.id"
                :img-name="notice.name"
                :img-info="notice.info"
                :news-title="notice.title"
                :news-date="notice.date"
            >
                <template #title>
                    <h2>{{notice.title}}</h2>
                </template>
                <p>{{notice.content | truncate(200)}}</p>
            </hcode-section-news-individual>


        </div>
        
    </section>
</template>
<script>
import HcodeSectionNewsIndividual from "./HcodeSectionNewsIndividual"
import {mapGetters} from "vuex"

export default {
    components: {
        HcodeSectionNewsIndividual,
    },
    computed: mapGetters({
        hcodeNews : "getHcodeNews"
    })
}
</script>
<style scoped>
    section {
        padding: 50px 0;
        margin-top: 25px;
        background-color: #F37520;
    }
</style>