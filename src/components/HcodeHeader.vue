<template>
    <header>
        <nav class="navbar navbar-brand mr-auto">
            <a href="#" class="link">
                <img src="./../assets/logo.svg" alt="Hcode Treinamento" class="img d-inline-block align-top " id="logo"> Futebol Clube
            </a>
            <div class="links mr-2">
                <!-- <a href="#" @click.prevent="$emit('change-component', 'home')" class="btn mr-5">Início</a> -->
                <router-link to="/" class="btn mr-5">Início</router-link>
                <router-link to="News" class="btn mr-5">Notícias</router-link>
                <!-- <a href="#" @click.prevent="$emit('change-component', 'news')" class="btn mr-5">Notícias</a> -->
                <!-- <a href="#" class="btn mr-5">Classificações</a> -->

                <select name="championship" id="select-championship" class="form-control" @change="$emit('select-championship', $event.target.value)">
                    <option value="">Selecione um Campeonato</option>
                    <option value="Campeonato Brasileiro" selected>Campeonato Brasileiro</option>
                    <option value="Campeonato Espanhol">Campeonato Espanhol</option>
                    <option value="Campeonato Inglês">Campeonato Inglês</option>
                    <option value="Campeonato Italiano">Campeonato Italiano</option>
                </select>
                
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
    .link-active{
        background-color:#fff;
        color: #000!important; 
    }
</style>