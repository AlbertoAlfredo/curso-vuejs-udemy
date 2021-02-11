<template>
    <section>
        <div class="container">
            <div class="row">
                <div class="col-5 text-center principal-news">
                    <h2>Veja os resultados</h2>
                </div>
                <div class="col-5 offset-2 text-center principal-news">
                    <h2>Venha conhecer o Centro de Treinamentos da Hcode</h2>
                </div>
            </div>
        </div>
    </section>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    section {
        margin-top: 25px;
    }
    .container .row {
        height: 300px;
    }
    .container .row .col-5:first-child {
        background-color: rgba(0, 0, 0, 0.5);
        background-image: url("./../../assets/football.jpg");
        background-repeat: no-repeat;
        background-size: 100%;
        padding: 0px;
    }
    .container .row .col-5:nth-child(2) {
        background-color: rgba(0, 0, 0, 0.5);
        background-image: url("./../../assets/football2.jpg");
        background-repeat: no-repeat;
        background-size: 100%;
        padding: 0px;
    }
    h2 {
        margin: 25% 0;
        padding: 0px;
        color: #F6B64E;
        background-color: rgba(0, 0, 0, 0.5);
        width: 100%;
    }
    .principal-news {
        cursor: pointer;
    }
</style>