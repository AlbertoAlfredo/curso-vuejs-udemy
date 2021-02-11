<template>
    <header>
        <nav class="navbar navbar-brand mr-auto">
            <a href="#" class="link">
                <img src="./../assets/logo.svg" alt="Hcode Treinamento" class="img d-inline-block align-top " id="logo"> Futebol Clube
            </a>
            <div class="links mr-2">
                <a href="#" class="btn mr-5">Início</a>
                <a href="#" class="btn mr-5">Times</a>
                <a href="#" class="btn mr-5">Classificações</a>
                
            </div>
        </nav>
    </header>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    header{
        background-color: #000;
    }
    #logo {
        width: 150px;
        height: 100%;
    }
    .links {
        display: inline-flex;
    }
    .links a {
        color: #fff;
    }
    .links a:focus{
        outline: none !important;
        box-shadow: none !important;
    }
    .link {
        color: #D48E23;
        font-size: 30px;
        font-family: 'Rajdhani';
    }
</style>