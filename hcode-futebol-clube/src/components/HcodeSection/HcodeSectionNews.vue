<template>
    <section>
        <div class="container ">
            <hcode-section-news-individual
                img-name="news1.jpg"
                img-info="Noticia 1"
                news-title="Começa os treinos para nova temporada"
                news-content="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam hic alias esse debitis obcaecati fugit in laboriosam cumque? Voluptatem repellat deserunt facilis eos quas voluptas perferendis ipsam, eaque ullam! Dolor? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat aliquid nesciunt sed temporibus incidunt commodi distinctio nostrum voluptatem cumque, sequi expedita optio harum totam iste, libero laboriosam accusantium ut."
                news-date="01/01/2020"
            />
            <hcode-section-news-individual
                img-name="news2.jpg"
                img-info="Noticia 2"
                news-title="Jogo de quarta feira termina empatado"
                news-content="Lorem ipsum dolor sit amet consectetur, quero deixar aqui marcado que quem está fazendo o código seguindo o curso sou eu Alberto e não sou fã de futebol. adipisicing elit. Nam hic alias esse debitis obcaecati fugit in laboriosam cumque? Voluptatem repellat deserunt facilis eos quas voluptas perferendis ipsam, eaque ullam! Dolor? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat aliquid nesciunt sed temporibus incidunt commodi distinctio nostrum voluptatem cumque, sequi expedita optio harum totam iste, libero laboriosam accusantium ut."
                news-date="07/01/2020"
            />
            <hcode-section-news-individual
                img-name="news3.jpg"
                img-info="Noticia 3"
                news-title="A inauguração do novo estádio será semana que vem"
                news-content="Lorem ipsum dolor sit amet consectetur, fico aqui pensando como alguém cria uma aula de programação e usa um site de futebol como tema? Seria mais divertido um de polemon por exemplo. adipisicing elit. Nam hic alias esse debitis obcaecati fugit in laboriosam cumque? Voluptatem repellat deserunt facilis eos quas voluptas perferendis ipsam, eaque ullam! Dolor? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat aliquid nesciunt sed temporibus incidunt commodi distinctio nostrum voluptatem cumque, sequi expedita optio harum totam iste, libero laboriosam accusantium ut."
                news-date="12/05/2020"
            />

        </div>
        
    </section>
</template>
<script>
import HcodeSectionNewsIndividual from "./HcodeSectionNewsIndividual"

export default {
    components: {
        HcodeSectionNewsIndividual,
    }
}
</script>
<style scoped>
    section {
        padding: 50px 0;
        margin-top: 25px;
        background-color: #F37520;
    }
</style>