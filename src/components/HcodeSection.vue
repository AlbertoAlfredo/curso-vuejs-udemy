<template>
    <div>

        <div class="container row mt-5">
            <h3 v-if="championship">Você está vendo noticias do {{ championship }}</h3>
            <h3 v-else>Escolha um campeonato para ver notícias</h3>
        </div>
        <router-view></router-view>
        

        <div class="container">
            <div class="row mt-5 myclub">
                <div class="col-6">
                    <h3>Meu clube é: {{myClub}}</h3>
                </div>
                <div class="col-6">
                    <hcode-input v-model="myClub" />
                </div>
            </div>
        </div>
    </div>
</template>
<script>

import HcodeInput from "./HcodeSection/HcodeInput"
import {mapGetters} from "vuex"

export default {
    components: {
        HcodeInput,
    },
    data(){
        return{
            
        }
    },
    props: {
        currentComponent: String,
    },
    computed: mapGetters({
        championship: 'getChampionship',
        myClub: 'getClubName',
    })
};
</script>
<style scoped>
</style>