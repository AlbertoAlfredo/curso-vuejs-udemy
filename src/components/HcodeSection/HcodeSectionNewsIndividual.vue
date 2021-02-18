<template>
    <div>
        <div class="row">
            <div class="col-3">
                <img class="img-fluid" :src="require('../../assets/' + this.imgName)" alt="">
            </div>
            <div class="col-9">
                
                <slot name="title"></slot>
                <slot>Erro no texto, favor informar a gente</slot>
                <span class="font-italic">{{formatDate(newsDate)}}</span>

            </div>
        </div>
    </div>    
</template>
<script>
import Utils from "./../../mixins/UtilsMixin"

export default {
    props: {
        imgName: {
            type: String,
            required: true,
        },
        imgInfo: {
            type: String,
            required: true,
        },
        newsDate: {
            type: String,
            required: true,
        },
    },
    mixins: [Utils]
}
</script>
<style scoped>
    .row{
        margin-bottom: 30px;
    }
    h2{
        cursor: pointer;
        color: #fff;
    }
</style>