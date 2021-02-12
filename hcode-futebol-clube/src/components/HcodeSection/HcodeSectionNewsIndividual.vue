<template>
    <div>
        <div class="row">
            <div class="col-3">
                <img class="img-fluid" :src="require('../../assets/' + this.imgName)" alt="">
            </div>
            <div class="col-9">
                
                <h2>{{newsTitle}}</h2>
                <p>{{newsContent | truncate(200)}}</p>
                <span class="font-italic">{{newsDate}}</span>

            </div>
        </div>
    </div>    
</template>
<script>
export default {
    // data(){
    //     urlImg: "../../assets/"
    // },
    props: {
        imgName: {
            type: String,
            required: true,
        },
        imgInfo: {
            type: String,
            required: true,
        },
        newsTitle: {
            type: String,
            required: true,
        },
        newsContent: {
            type: String,
            required: true,
        },
        newsDate: {
            type: String,
            required: true,
        },
    },
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