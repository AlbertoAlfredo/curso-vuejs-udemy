import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);
export default new Vuex.Store({
    state: {
        championship : 'Campeonato Brasileiro',
        clubName: "Hcode Treinamentos",
        hcodeNews: [
            {
                id:'01',
                name: 'news1.jpg',
                info:'Noticia 1',
                title: 'Começa os treinos para nova temporada',
                content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam hic alias esse debitis obcaecati fugit in laboriosam cumque? Voluptatem repellat deserunt facilis eos quas voluptas perferendis ipsam, eaque ullam! Dolor? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat aliquid nesciunt sed temporibus incidunt commodi distinctio nostrum voluptatem cumque, sequi expedita optio harum totam iste, libero laboriosam accusantium ut.',
                date: '2020-01-01',

            },
            {
                id:'02',
                name: 'news2.jpg',
                info:'Noticia 2',
                title: 'Jogo de quarta feira termina empatado',
                content: 'Lorem ipsum dolor sit amet consectetur, quero deixar aqui marcado que quem está fazendo o código seguindo o curso sou eu Alberto e não sou fã de futebol. adipisicing elit. Nam hic alias esse debitis obcaecati fugit in laboriosam cumque? Voluptatem repellat deserunt facilis eos quas voluptas perferendis ipsam, eaque ullam! Dolor? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat aliquid nesciunt sed temporibus incidunt commodi distinctio nostrum voluptatem cumque, sequi expedita optio harum totam iste, libero laboriosam accusantium ut.',
                date: '2020-01-07',

            },
            {
                id:'03',
                name: 'news3.jpg',
                info:'Noticia 3',
                title: 'A inauguração do novo estádio será semana que vem',
                content: 'Lorem ipsum dolor sit amet consectetur, fico aqui pensando como alguém cria uma aula de programação e usa um site de futebol como tema? Seria mais divertido um de polemon por exemplo. adipisicing elit. Nam hic alias esse debitis obcaecati fugit in laboriosam cumque? Voluptatem repellat deserunt facilis eos quas voluptas perferendis ipsam, eaque ullam! Dolor? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo quaerat aliquid nesciunt sed temporibus incidunt commodi distinctio nostrum voluptatem cumque, sequi expedita optio harum totam iste, libero laboriosam accusantium ut.',
                date: '2020-05-12',

            },
        ]
    },
    getters: {
        getChampionship(state){
            return state.championship;
        },
        getClubName(state){
            return state.clubName;
        },
        getHcodeNews(state){
            return state.hcodeNews;
        }
    },
    mutations: {
        setChampionship(state, newValue) {
            state.championship = newValue;
        },
        setClubName(state, newValue) {
            state.clubName = newValue;
        },
        setHcodeNews(state, newValue){
            state.hcodeNews = newValue;
        }
    },
    actions: {
        changeChampionship(context, value) {
            context.commit('setChampionship', value);
        },
        updateClubName(context, value) {
            context.commit('setClubName', value);
        }
    }
})